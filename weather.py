import pandas as pd
import darksky as ds
from datetime import datetime as dt

pd.set_option('display.max_columns',15)
pd.set_option('display.width',1000)

def string_to_date(date):
    year = number_string_to_int(date[0:4])
    month = number_string_to_int(date[5:7])
    day = number_string_to_int(date[8:10])
    time = dt(year,month,day,12)
    return time

def number_string_to_int(number):
    number = number.replace(" ","")
    if number[0] == '0':
        number = number[1:]
    return int(number)

def main():
    key = input("Key: ")
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    print(df)
    weather_data = []
    count = 0
    for index, row in df.iterrows():
        count += 1
        tourn = row['0']
        course = row['1']
        lat = row['2']
        lng = row['3']
        date = string_to_date(row['1']).isoformat()
        print(date)
         
        with ds.forecast(key,lat,lng,time=date) as lw:
            
            try:
                summary = lw.summary
            catch AttributeError:
                summary = None
            precip_itens = lw.precipIntensity
            precip_prob = lw.precipProbability
            precip_type = lw.precipType
            temp = lw.temperature
            app_temp = lw.apparentTemperature
            dew_point = lw.dewPoint
            humidity = lw.humidity
            pressure = lw.pressure
            wind_speed = lw.windSpeed
            wind_gust = lw.windGust
            wind_bearing = lw.windBearing
            cloud_cover = lw.cloudCover
            visibility = lw.c
            try:
                weather = [tourn,course,lat,lng,lw.summary,
                           lw.precipIntensity,lw.precipProbability,
                           lw.precipType,lw.temperature,lw.apparentTemperature,
                           lw.dewPoint,lw.humidity,lw.pressure,lw.windSpeed,
                           lw.windGust,lw.windBearing,lw.cloudCover,
                           lw.visibility,lw.uvIndex,lw.ozone]
            except AttributeError:

            weather_data += [weather]
        if count > 10:
            break
    wdf = pd.DataFrame(weather_data)
    wdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data.csv')
    print(wdf)

if __name__=="__main__":
    main()
