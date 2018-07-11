import pandas as pd
import darksky as ds
import sys
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)
pd.set_option('display.max_rows',1000)

def row_to_datetime(row):
    date = string_to_date(row['1'],row['To UTC'])
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

def main():
   
    # IS THE FORMAT THIS IS PRINTING IN CORRECT?
    
    key = input("Key: ") #Dark Sky API
    cols = ['Golf','Tournament','Course','Date','Score','Latitude','Longitude','UTC Offset']
    types = [str,str,str,str,float,float,float,float]
    data_types = dict(zip(cols,types))
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',dtype=data_types,encoding='latin1')
    print(df)
    #Create frame of only lat/lng/offset
    #Use frame to create list containing only unique entries in frame
    #use list (perhaps as frame for apply()) to get weather data
    '''
    dates = df.apply(lambda row: row_to_datetime(row),axis=1)
    weather_data = []
    #Dark Sky limits free calls to 1000 per day. By setting start_count and
    #end_count, it is easy to ensure that less than 1000 calls are made.
    start_count = int(input("Start Index (Inclusive): "))
    end_count = int(input("Number of Images: ")) + start_count
    count = start_count

    for index, row in df.iterrows():

        tourn = row['0']
        course = row['1']
        lat = row['2']
        lng = row['3']
        date = row_to_datetime(row).isoformat()
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
    #writeto_string allows a new .csv to be written for each pair of
    #start_count and end_count. This is beneficial as it allows for multiple
    #CSVs without having to explicitly change the path. The CSVs can be
    #concatenated to complete the dataset. Both lower and upper boundaries
    #used in name are inclusive.
    '''
    #writeto_string = r'C:\Users\Mitch\Projects\Golf\Data\weather_data_' + str(start_count) + '_through_' + str(end_count-1) + '.csv'
    #wdf.to_csv(writeto_string,index=False)
    #print(wdf)

if __name__=="__main__":
    main()
