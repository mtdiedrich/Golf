from googleplaces import GooglePlaces
import pandas as pd

def main():

    # HARD NOTE
    # Data for Sheshan International (Nine Bridges) removed
    # Difficult to parse and work with
    # May want this data in the future because
    # The exotic could provide interesting weather data

    df = pd.DataFrame.from_csv(path="Courses.csv")
    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)

    google_api_key = 'AIzaSyD1hQsTXB9npkfQL_IillnMk1Lzh6EsjW8'
    google_places = GooglePlaces(google_api_key)

    """
    
    query_result = google_places.text_search(query="Grayhawk Raptor", location="Scottsdale, Arizona", radius="50000")
    df.loc[0,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[0,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="CordeValle", location="San Martin, California", radius="50000")
    df.loc[1,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[1,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Silverado Country",location="Napa, California",radius="50000")
    df.loc[2,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[2,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Augusta National", location="Augusta, Georgia", radius="50000")
    df.loc[3,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[3,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="The MINES Resort", location="Seri Kembangan, Malaysia", radius="50000")
    df.loc[4,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[4,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="TPC", location="Kuala Lumpur, Malaysia", radius="50000")
    df.loc[5,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[5,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Country Club", location="Hattiesburg, Mississippi", radius="50000")
    df.loc[6,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[6,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Annandale Golf", location="Madison, Mississippi", radius="50000")
    df.loc[7,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[7,'Longitude'] = query_result.places[0].geo_location['lng']

    query_result = google_places.text_search(query="Country Club", location="Jackson, Mississippi", radius="50000")
    df.loc[8,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[8,'Longitude'] = query_result.places[0].geo_location['lng']
    
    query_result = google_places.text_search(query="TPC Summerlin", location="Las Vegas, Nevada", radius="5000")
    df.loc[9,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[9,'Longitude'] = query_result.places[0].geo_location['lng']
    
    query_result = google_places.text_search(query="El Camaleon", location="Playa Del Carmen, Mexico", radius="5000")
    df.loc[10,'Latitude'] = query_result.places[0].geo_location['lat']
    df.loc[10,'Longitude'] = query_result.places[0].geo_location['lng']

    """


    
    print(df)
    print()

    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()

if __name__ == "__main__":
    main()