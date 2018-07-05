import pandas as pd
import googlemaps
import googlemaps.timezone as tz
import sys
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)
GMAPS = googlemaps.Client(key=input("Key: ")) #input Google API key

def geo_tuple(row):
    lat = row[2]
    lng = row[3]
    return tuple((lat,lng))

def main():
    
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    df['Pairs'] = df.apply(lambda row: geo_tuple(row), axis = 1)
    geodata = list(set(list(df['Pairs'])))
    timezones = []
    for x in range(len(geodata)):
        timezone = tz.timezone(GMAPS,geodata[x])
        timezones += [[geodata[x][0],geodata[x][1],timezone['timeZoneId'],timezone['timeZoneName'],int(timezone['rawOffset'])/3600]]
        try:
            int(timezone['rawOffset']/3600)
        except ValueError:
            print(timezone)A
    tdf = pd.DataFrame(timezones)
    print(tdf)
    tdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\timezones.csv')

if __name__=="__main__":
    main()
