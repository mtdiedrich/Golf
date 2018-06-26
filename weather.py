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

            try:
                nearest_storm_distance = lw.nearestStormDistance
            catch AttributeError:
                nearest_storm_distance = None

            try:
                precip_itens = lw.precipIntensity
            catch AttributeError:
                precip_itens = None 

            try:
                precip_intens_error = lw.precipIntensityError
            catch AttributeError:
                precip_intens_error = None 

            try:
                precip_probability = lw.precipProbability
            catch AttributeError:
                precip_probability = None

            try:
                precip_type = lw.precipType
            catch AttributeError:
                precip_type = None

            try:
                temp = lw.temperature
            catch AttributeError:
                temp = None

            try:
                app_temp = lw.apparentTemperature
            catch AttributeError:
                app_temp = None

            try:
                dew_point = lw.dewPoint
            catch AttributeError:
                dew_point = None

            try:
                humidity = lw.humidity
            catch AttributeError:
                humidity = None

            try:
                pressure = lw.pressure
            catch AttributeError:
                pressure = None

            try:
                wind_speed = lw.windSpeed
            catch AttributeError:
                wind_speed = None

            try:
                wind_gust = lw.windGust
            catch AttributeError:
                wind_gust = None

            try:
                wind_bearing = lw.windBearing
            catch AttributeError:
                wind_bearing = None

            try:
                cloud_cover = lw.cloudCover
            catch AttributeError:
                cloud_cover = None

            try:
                uv_index = lw.uvIndex
            catch AttributeError:
                uv_index = None

            try:
                visibility = lw.visibility
            catch AttributeError:
                visibility = None

            try:
                ozone = lw.ozone
            catch AttributeError:
                ozone = None


        if count > 10:
            break
    wdf = pd.DataFrame(weather_data)
    wdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data.csv')
    print(wdf)

if __name__=="__main__":
    main()
