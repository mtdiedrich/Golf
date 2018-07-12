import pandas as pd
import darksky as ds
import sys
from datetime import datetime as dt

global KEY
KEY = input("Key: ") #Dark Sky API

def row_to_datetime(row):
    date = string_to_date(row['Date'],row['UTC Offset'])
    return date

def string_to_date(date,offset):

    #Given the date in the format it is found in the data, this turns each
    #Number into an int and returns a datetime with those ints
    year = number_string_to_int(date[0:4])
    month = number_string_to_int(date[5:7])
    day = number_string_to_int(date[8:10])
    #17 is added to the offset because I want noon local time for the event.
    #My offsets are wrt to GMT, and my local time (which DateTime is using) is
    #-5 from GMT, thus, I need to add 12 and 5. Modulo 24 because hour must be
    #between 0 and 23 incusive
    time = dt(year,month,day,int(17+offset)%24)
    return time

def number_string_to_int(number):
    #Alleviates concern that an int in string format will have an empty space,
    #then converts the string to an int
    number = number.replace(" ","")
    if number[0] == '0':
        number = number[1:]
    return int(number)

def foo(row):

    lat = row['Latitude']
    lng = row['Longitude']
    date = row['Date']
    time = row['Datetimes']
    data = [lat,lng,date]
    
    with ds.forecast(KEY,lat,lng,time=time) as lw:
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

    s = pd.Series(data)
    print(s)
    return s

def main():
   
    cols = ['Golf','Tournament','Course','Date','Score','Latitude','Longitude','UTC Offset']
    types = [str,str,str,str,float,float,float,float]
    data_types = dict(zip(cols,types))
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',dtype=data_types,encoding='latin1')
    df = df[['Date','Latitude','Longitude','UTC Offset']]
    df = df.drop_duplicates()
    df = df.dropna(subset=['UTC Offset'])
    df['Datetimes'] = df.apply(lambda row: row_to_datetime(row).isoformat(),axis=1)
    frame['Latitude','Longitude','Date','Summary','Precipitation Intensity',
          'Precipitation Intensity Error','Precipitation Probability',
          'Precipitation Type','Temperature','Apparent Temperature',
          'Dew Point','Humidity','Pressure',] = df.apply(lambda row: foo(row),axis=1)
    frame.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather.csv',index=False)
    print(frame)



if __name__=="__main__":
    main()
