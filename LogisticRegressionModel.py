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

class Model:

    def __init__(self,filename):
        self.lines = pd.read_csv(filename)
        self.data = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
        numeric_columns = self.data.select_dtypes(include=[int,float]).columns
        self.data = self.data.fillna(self.data[numeric_columns].mean())
        favorites = list(self.lines['First Golfer'])
        dogs = list(self.lines['Second Golfer'])
        golfers = list(set(list(favorites+dogs)))
        golfer_dfs = [self.data.loc[self.data['Golfer'] == x] for x in golfers]
        real_golfers = list(set(list(pd.concat(golfer_dfs)['Golfer'])))
        fail_list = [x for x in golfers if x not in real_golfers]
        logreg = linear_model.LogisticRegression()
        wpdf = self.lines[['Latitude','Longitude','Date']].drop_duplicates()
        hour = (int(float(wpdf['Longitude'][0])/15) + 17)%24
        date = str(wpdf['Date'][0]) + '-' + str(hour)
        weather = get_weather(float(wpdf['Latitude'][0]),float(wpdf['Longitude'][0]),datetime.datetime.strptime(date,"%m/%d/%Y-%H").isoformat())
        dfs = []
        try:
            for golfer in golfer_dfs:
                name = list(set(list(golfer['Golfer'])))
                x, y = return_x_and_y(golfer)
                logreg.fit(x,y.ravel())
                weath_proba = logreg.predict_proba(weather.values.reshape(1,-1))
                df = pd.DataFrame(weath_proba)
                df.columns = logreg.classes_
                df.index = [name]
                dfs += [df]
            df = pd.concat(dfs)
            self.probabilities = df.fillna(0)
            self.probabilities.columns = [int(x) for x in self.probabilities.columns]
        except ValueError:
            print('Golfers not found: ')
            for x in fail_list:
                print(x)

    def get_downward_cumulative_probabilities(self):
        probabilities = self.probabilities
        prob_list = np.asarray(probabilities)
        cumulative_downward = pd.DataFrame([np.flip(np.cumsum(np.flip(x,axis=0)),axis=0) for x in prob_list])
        cumulative_downward.index = probabilities.index
        cumulative_downward.columns = [int(x) for x in probabilities.columns]
        return cumulative_downward

    def evaluate(self):
        probabilities = self.probabilities
        lines = self.lines
        downward = self.get_downward_cumulative_probabilities()
        evals = []
        for x in lines.values.tolist():
            golfer1 = x[0]
            golfer2 = x[2]
            g1_probs = probabilities.loc[probabilities.index == golfer1]
            g2_probs = probabilities.loc[probabilities.index == golfer2]
            g1_down = downward.loc[downward.index == golfer1]
            g2_down = downward.loc[downward.index == golfer2]
            
            evaluations = {x: 0 for x in [golfer1,golfer2]}
            for x in probabilities.columns:
                for y in probabilities.columns:
                    if x==y-1:
                        evaluations[golfer1] += g1_probs[x][0] * g2_down[y][0]
                        evaluations[golfer2] += g2_probs[x][0] * g1_down[y][0]
            evaluations['Push'] = 1 - evaluations[golfer1] - evaluations[golfer2]
            evals += [evaluations]
        return evals
