from googleplaces import GooglePlaces
import pandas as pd

def main():

    df = pd.DataFrame.from_csv(path=r'C:\Users\Mitch\Projects\Data\Courses.csv')
    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)
    df.rename(columns={'1': 'Par'}, inplace=True)

    google_api_key = 'AIzaSyCLxP9X3uDx6Hfcr5wb95fliDFN3--KmxY'
    google_places = GooglePlaces(google_api_key)
    
    #print(df)
    #print()
    df = df.copy() 
    query_result = google_places.nearby_search(location='Orlando, Florida',keyword='Bay Hill Club and Lodge', radius=50000)
    df.iloc[0].loc['Latitude'] = query_result.places[0].geo_location['lat']
    '''    
    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()
    '''
if __name__ == "__main__":
    main()
