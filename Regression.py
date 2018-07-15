import pandas as pd
import numpy as np
import darksky as ds
from datetime import datetime as dt
from sklearn import linear_model
from requests.exceptions import HTTPError as BaseHTTPError

global KEY
KEY = input("Key: ")

def return_x_and_y(frame):
    df = frame
    col_data = ['Latitude','Longitude','Precipitation Intensity',
                'Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']
    x = df[col_data]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)
    return x, y

def main():
    #Precipitation probability is probability that it rained
    #not prior predicted chance of rain
    #might mean it should be removed
    cols = ['Golfer','Tournament','Course','Date','Score','Latitude',
            'Longitude','UTC Offset','Summary','Precipitation Intensity',
            'Precipitation Probability','Precipitation Intensity Error',
            'Precipitation Type','Temperature','Apparent Temperature',
            'Dew Point','Humidity','Pressure','Wind Speed','Wind Gust',
            'Wind Bearing','Cloud Cover','Visibility']
    types = [str,str,str,str,float,float,float,float,str,float,float,float,
             str,float,float,float,float,float,float,float,float,float,float]
    data_types = dict(zip(cols,types))
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',dtype=data_types,encoding='latin1')

    numeric_columns = df.select_dtypes(include=[int,float]).columns

    df = df.dropna(subset=['Temperature'])
    df = df.loc[df['Golfer'] == input('Golfer: ')]
    y = return_x_and_y(df)[1]

    #BUILD DATA
    #Nan drop    
    #na_drop_df = df.dropna()
    #na_drop_x = return_x_and_y(na_drop_df)[0]
    #na_drop_y = return_x_and_y(na_drop_df)[1]
    #na_linreg = linear_model.LinearRegression()
    #na_linreg.fit(na_drop_x,na_drop_y)
    #print(na_drop_df)
    
    #Nan mean replacement
    mean_df = df.fillna(df[numeric_columns].mean())
    mean_df = mean_df.drop(['Precipitation Intensity Error'],axis=1)
    mean_x = return_x_and_y(mean_df)[0]
    mean_linreg = linear_model.LinearRegression()
    mean_linreg.fit(mean_x,y)

    #Nan median replacement
    #median_df = df.fillna(df[numeric_columns].median())
    #median_x = return_x_and_y(median_df)[0]
    #median_linreg = linear_model.LinearRegression()
    #median_linreg.fit(median_x,y)

        
    lat = input('Latitude: ')
    lng = input('Longitude: ')
    year = input('Year: ')
    month = input('Month: ')
    day = input('Day: ')
    
    date = dt(int(year),int(month),int(day),12).isoformat()
    data = [float(lat),float(lng)]

    try:
        with ds.forecast(KEY,lat,lng,time=date) as lw:
            try:
                summary = lw.summary
            except AttributeError:
                summary = None
            data += [summary]
            try:
                precip_intens = lw.precipIntensity
            except AttributeError:
                precip_intens = None 
            data += [precip_intens]
            try:
                precip_intens_error = lw.precipIntensityError
            except AttributeError:
                precip_intens_error = None
            data += [precip_intens_error]
            try:
                precip_probability = lw.precipProbability
            except AttributeError:
                precip_probability = None
            data += [precip_probability]
            try:
                precip_type = lw.precipType
            except AttributeError:
                precip_type = None 
            data += [precip_type]
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

    precipitation_prob = input('Precipitation Probability: ')

    data = pd.DataFrame(data).T
    data[4] = float(precipitation_prob)
    data.columns = [cols[5]] + [cols[6]] + cols[8:]
    data = data.drop(['Summary','Precipitation Type','Precipitation Intensity Error'],axis=1)
    x_test = np.asarray(data).reshape(data.shape[0],data.shape[1])
    prediction = mean_linreg.predict(x_test)
    prediction = round(prediction[0][0])
    pred = mean_linreg.predict(mean_x)
    residuals = pred - y
    cumulative = 0
    for x in range(len(np.histogram(residuals,bins=[x for x in range(-20,22)])[0])):
        first = np.histogram(residuals,bins=[x for x in range(-20,22)])[0][x]
        second = np.histogram(residuals,bins=[x for x in range(-20,22)])[1][x] + prediction
        cumulative += float(first)/len(residuals)
        print(int(second), cumulative)

if __name__=="__main__":
    main()
