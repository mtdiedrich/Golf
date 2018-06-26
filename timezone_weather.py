import pandas as pd
import googlemaps
import googlemaps.timezone
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

def geo_tuple(row):
    lat = row[2]
    lng = row[3]
    return tuple(lat,lng)

def main():
    
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    #gmaps = googlemaps.Client(key=input("Key: ")) #input Google API key
    df['Pairs'] = df.apply(lambda row: geo_tuple(row))

if __name__=="__main__":
    main()
