from googleplaces import GooglePlaces
import pandas as pd
import numpy as np

pd.set_option('display.max_rows',200)
x = 0
google_api_key = input("Key: ")
google_places = GooglePlaces(google_api_key)
df = pd.DataFrame.from_csv(path=r'C:\Users\Mitch\Projects\Golf\Data\Courses.csv')

def add_geo_data(location, keyword, radius):
    
    global x
    global df
    global google_api_key
    global google_places

    query_result = google_places.nearby_search(location=location,keyword=keyword, radius=radius)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1

def main():

    global df

    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)
    df.rename(columns={'1': 'Par'}, inplace=True)

    print(df)

    '''
    query_result = google_places.nearby_search(location='Kent, Sandwich',keyword='Royal St. George Golf Club', radius=50000)
    
    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()
    '''

if __name__ == "__main__":
    main()
