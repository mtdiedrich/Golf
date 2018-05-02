from googleplaces import GooglePlaces
import pandas as pd

def main():

    df = pd.DataFrame.from_csv(path="Courses.csv")
    print(df)

    google_api_key = 'API KEY'
    google_places = GooglePlaces(google_api_key)

    query_result = google_places.text_search(query="Silverado Country",location="Napa, California",radius="50000")

    if query_result.has_attributions:
        print(query_result.html_attributions)

    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        place.get_details()
        print(place.details)

if __name__ == "__main__":
    main()