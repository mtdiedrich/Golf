import pandas as pd
import darksky as ds
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)

def string_to_date(date):
    #Given the date in the format it is found in the data, this turns each
    #Number into an int and returns a datetime with those ints
    year = number_string_to_int(date[0:4])
    month = number_string_to_int(date[5:7])
    day = number_string_to_int(date[8:10])
    time = dt(year,month,day,12)
    return time

def number_string_to_int(number):
    #Alleviates concern that an int in string format will have an empty space,
    #then converts the string to an int
    number = number.replace(" ","")
    if number[0] == '0':
        number = number[1:]
    return int(number)

def main():
    
    key = input("Key: ") #Dark Sky API
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    weather_data = []
    #Dark Sky limits free calls to 1000 per day. By setting start_count and
    #end_count, it is easy to ensure that less than 1000 calls are made.
    start_count = 0
    end_count = 10
    count = start_count

    for index, row in df.iterrows():

        tourn = row['0']
        course = row['1']
        lat = row['2']
        lng = row['3']
        date = string_to_date(row['1']).isoformat()
        #Some forecasts do not have all attributes. Handling the thrown
        #exceptions allows None value to be enterred into data
        with ds.forecast(key,lat,lng,time=date) as lw:
            try:
                summary = lw.summary
            except AttributeError:
                summary = None
            try:
                precip_intens = lw.precipIntensity
            except AttributeError:
                precip_intens = None 
            try:
                precip_intens_error = lw.precipIntensityError
            except AttributeError:
                precip_intens_error = None
            try:
                precip_probability = lw.precipProbability
            except AttributeError:
                precip_probability = None
            try:
                precip_type = lw.precipType
            except AttributeError:
                precip_type = None 
            try:
                temp = lw.temperature
            except AttributeError:
                temp = None
            try:
                app_temp = lw.apparentTemperature
            except AttributeError:
                app_temp = None
            try:
                dew_point = lw.dewPoint
            except AttributeError:
                dew_point = None
            try:
                humidity = lw.humidity
            except AttributeError:
                humidity = None
            try:
                pressure = lw.pressure
            except AttributeError:
                pressure = None
            try:
                wind_speed = lw.windSpeed
            except AttributeError:
                wind_speed = None
            try:
                wind_gust = lw.windGust
            except AttributeError:
                wind_gust = None 
            try:
                wind_bearing = lw.windBearing
            except AttributeError:
                wind_bearing = None
            try:
                cloud_cover = lw.cloudCover
            except AttributeError:
                cloud_cover = None
            try:
                visibility = lw.visibility
            except AttributeError:
                visibility = None

        weather_data += [[tourn,course,lat,lng,summary,precip_intens,
                          precip_intens_error,precip_probability,
                          precip_type,temp,app_temp,dew_point,humidity,
                          pressure,wind_speed,wind_gust,wind_bearing,
                          cloud_cover,visibility]]
        count += 1
        if count >= end_count:
            break

    wdf = pd.DataFrame(weather_data)
    cols = ['Tournament','Course','Latitude','Longiude','Summary',
            'Precipitation Intensity','Precipitation Intensity Error',
            'Precipitation Probability','Precipitation Type','Temperature',
            'Apparent Temperature','Dew Point','Humidity','Pressure',
            'Wind Speed','Wind Gust','Wind Bearing','Cloud Cover',
            'Visibility']
    wdf.columns = cols
    wdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data.csv',index=False)
    print(wdf)

if __name__=="__main__":
    main()
