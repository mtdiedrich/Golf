import time
import pandas as pd
import numpy as np
import datetime
import darksky as ds
from sklearn import linear_model, metrics
from requests.exceptions import HTTPError as BaseHTTPError

#DO
#Rewrite this module as a class that can be instantiated by BetAnalyzer.py

global KEY
KEY = input("Key: ") #Dark Sky API
pd.set_option('display.width',170)
pd.set_option('display.max_columns',100)
pd.set_option('display.max_rows',100)

def return_x_and_y(frame):
    df = frame
    col_data = ['Latitude','Longitude','Precipitation Intensity',
                'Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']
    col_data = [x for x in col_data if x in frame.columns]
    x = df[col_data]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)
    return x, y

def error(row):
    return row[1] - row[0]

def error_mod(row):
    error = 0
    if row[1] - row[0] > 0:
        error = row[1] - row[0]
    return error

def get_weather(lat,lng,time):

    data = [lat,lng]

    try:
        with ds.forecast(KEY,lat,lng,time=time) as lw:
            try:
                precip_intens = lw.precipIntensity
            except AttributeError:
                precip_intens = None 
            data += [precip_intens]
            try:
                precip_probability = lw.precipProbability
            except AttributeError:
                precip_probability = None
            data += [precip_probability]
            try:
                temp = lw.temperature
            except AttributeError:
                temp = None
            data += [temp]
            try:
                app_temp = lw.apparentTemperature
            except AttributeError:
                app_temp = None
            data += [app_temp]
            try:
                dew_point = lw.dewPoint
            except AttributeError:
                dew_point = None
            data += [dew_point]
            try:
                humidity = lw.humidity
            except AttributeError:
                humidity = None
            data += [humidity]
            try:
                pressure = lw.pressure
            except AttributeError:
                pressure = None
            data += [pressure]
            try:
                wind_speed = lw.windSpeed
            except AttributeError:
                wind_speed = None
            data += [wind_speed]
            try:
                wind_gust = lw.windGust
            except AttributeError:
                wind_gust = None 
            data += [wind_gust]
            try:
                wind_bearing = lw.windBearing
            except AttributeError:
                wind_bearing = None
            data += [wind_bearing]
            try:
                cloud_cover = lw.cloudCover
            except AttributeError:
                cloud_cover = None
            data += [cloud_cover]
            try:
                visibility = lw.visibility
            except AttributeError:
                visibility = None
            data += [visibility]
    except BaseHTTPError:
        print("ERROR")
        
    s = pd.Series(data)
    return s


def main():

    #Alternative method: log reg then avg with distribution of all golfers
    #Classify scores iteratively
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    numeric_columns = df.select_dtypes(include=[int,float]).columns


    # Change all this info
    latitude = 38.659434
    longitude = -90.482938
    year = 2018
    month = 8
    day = 9
    hour_offset = -1
    hour = 12 + hour_offset
    
    weath = get_weather(latitude,longitude,datetime.datetime(year,month,day,hour).isoformat())

    golfer = df.fillna(df[numeric_columns].mean())
    golfer = golfer.sample(frac=1).reset_index(drop=True)

    golfer1 = input('Golfer 1: ')
    golfer2 = input('Golfer 2: ')

    golfers = []
    golfers += [golfer1]
    golfers += [golfer2]

    dfs = []

    for i in golfers:
        temp = golfer.loc[golfer['Golfer'] == i]
        test = round(temp.shape[0]/5)
        train_df = temp[:(temp.shape[0]-test)]
        test_df = temp[(temp.shape[0]-test):]
        train_x, train_y = return_x_and_y(train_df)
        test_x, test_y = return_x_and_y(test_df)
        logreg = linear_model.LogisticRegression()
        logreg.fit(train_x,train_y.ravel())
        preds = logreg.predict(test_x)
        probs = logreg.predict_proba(test_x)
        data = []
        for x in range(len(preds)):
            data += [np.concatenate((test_y[x],np.array([preds[x]]),probs[x]),axis=0)]
        df = pd.DataFrame(data)
        df[0] = df[0].apply(lambda row: int(row))
        df[1] = df[1].apply(lambda row: int(row))
        df.columns = np.concatenate((np.array(['Score','prediction']), logreg.classes_),axis=0)
        df['error'] = df.apply(lambda row: error(row),axis=1)
        df['error mod'] = df.apply(lambda row: error_mod(row),axis=1)
        correct = list(df['error'].values >=0)
        acc = metrics.accuracy_score(test_y, preds)
        prec = metrics.precision_score(test_y, preds,average='micro')
        print(i)
        print('Error: ' + str(sum(abs(df['error'].values))))
        print('Squared Error: ' + str(sum(df['error'].values**2)))
        print('Error Mod: ' + str(sum(abs(df['error mod'].values))))
        print('Squared Error Mod: ' + str(sum(df['error mod'].values**2)))
        print('Accuracy: ' + str(acc))
        print('Precision: ' + str(prec))
        print('Hit rate: ' + str(correct.count(True)/len(correct)))
        print()
        x, y = return_x_and_y(temp)
        newlog = linear_model.LogisticRegression()
        newlog.fit(x,y.ravel())
        weath_proba = newlog.predict_proba(weath.values.reshape(1,-1))
        df = pd.DataFrame(weath_proba)
        df.columns = newlog.classes_
        dfs += [df]

    df = dfs[0].merge(dfs[1],how='outer',on=[x for x in dfs[0].columns if x in dfs[1].columns])
    df.index = [golfer1, golfer2]
    df = df.fillna(0)
    df = df[sorted(df.columns)]

    g1 = df.values[0]
    g2 = df.values[1]

    total = 0
    for x in range(len(g2)):
        for y in range(len(g1)):
            if y < x:
                total += g1[y] * g2[x]
    total = round(total *100,2)
    print(golfer1 + ': ' + str(total) + '%')

    total = 0
    for x in range(len(g1)):
        for y in range(len(g2)):
            if y < x:
                total += g1[x] * g2[y]
    total = round(total *100,2)
    print(golfer2 + ': ' + str(total) + '%')

    total = 0
    for x in range(len(g1)):
        for y in range(len(g2)):
            if y == x:
                total += g1[x] * g2[y]
    total = round(total *100,2)
    print('Tie: ' + str(total) + '%')

    print(g1)
    print(g2)


if __name__=="__main__":
    print()
    start = time.time()
    main()
    end = time.time()
    print()
    print('Runtime: ' + str(end-start))
