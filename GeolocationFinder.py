from googleplaces import GooglePlaces
import pandas as pd
import numpy as np

pd.set_option('display.max_rows',200)
x = 0
google_api_key = input("Key: ")
google_places = GooglePlaces(google_api_key)
df = pd.DataFrame.from_csv(path=r'C:\Users\Mitch\Projects\Golf\Data\Courses.csv')

def add_geo(query):
    
    global x
    global df
    global google_api_key
    global google_places

    query_result = google_places.text_search(query=query)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1

def main():

    global df

    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)
    df.rename(columns={'1': 'Par'}, inplace=True)

    for x in range(len(df['Course Name'])):
        place = df.iloc[x]['Course Name']
        if place == 'The Ailsa Championship Course':
            place = 'Trump Turnberry Course'
        if place == 'Hattisburg CC':
            place = 'Hattiesburg CC'
        if place == 'TPC Four Seasons Resort':
            place = 'TPC Las Colinas'
        if place == 'Trinity Forest Golf Club':
            place = 'Trinity Forest Dallas'
        if place == 'Sunset Ridge':
            place += ' Country Club'
        if place == 'Montreux G&CC':
            place = 'Montreux Reno'
        if place == 'Redstone GC (Fall Creek)':
            place = 'Golf Club of Houston'
        if place == 'Richelieu Valley G&CC':
            place = 'Richelieu Golf Quebec'
        if place == 'CC at Mirasol (Sunset Course)':
            place = 'Country Club at Mirasol'
        if place[len(place)-4:] == 'G&CC':
            place = place[:len(place)-4] + 'Golf and Country Club'
        if place[len(place)-2:] == 'CC':
            place = place[:len(place)-2] + 'Country Club'
        if place[len(place)-2:] == 'GC':
            place = place[:len(place)-2] + 'Golf Club'
        query_result = google_places.text_search(query=place)
        print(place)
        print(query_result.places[0].name)
        print(query_result.places[0].geo_location)

if __name__ == "__main__":
    main()
