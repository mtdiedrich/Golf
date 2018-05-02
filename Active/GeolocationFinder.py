from googleplaces import GooglePlaces
import pandas as pd

def main():

    df = pd.DataFrame.from_csv(path="Courses.csv")
    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)


    google_api_key = 'AIzaSyD1hQsTXB9npkfQL_IillnMk1Lzh6EsjW8'
    google_places = GooglePlaces(google_api_key)

    query_result = google_places.text_search(query="Silverado Country",location="Napa, California",radius="50000")
    df.loc[2,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[2,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Silverado Country", location="Napa, California", radius="50000")

    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()
        
    print(df)
    print()

if __name__ == "__main__":
    main()