import pandas as pd
import googlemaps
import googlemaps.timezone as tz
import sys
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.max_rows',200)
GMAPS = googlemaps.Client(key=input("Key: ")) #input Google API key

def timezone_data(row):
    print(row['Latitude'],row['Longitude'])
    timezone = tz.timezone(GMAPS,location=(row['Latitude'],row['Longitude']))
    zone = None
    try:
        zone = int(timezone['rawOffset']/3600)
    except ValueError:
        print(timezone)
    return zone

def geo_tuple(row):
    lat = row['Latitude']
    lng = row['Longitude']
    return tuple(lat,lng)

def main():

    cols = ['Golf','Tournament','Course','Date','Score','Latitude','Longitude','Region','Timezone','UTC Offset']
    types = [str,str,str,str,float,float,float,str,str,float]
    data_types = dict(zip(cols,types))
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',dtype=data_types,encoding='latin1')
    ndf = df[['Latitude','Longitude']]
    ndf = ndf.drop_duplicates()
    ndf = ndf.dropna(subset=['Latitude','Longitude'])
    ndf['UTC Offset'] = ndf.apply(lambda row: timezone_data(row),axis=1)
    print(ndf)
    ndf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\lat_lng_utc.csv',index=False)
    
if __name__=="__main__":
    main()
