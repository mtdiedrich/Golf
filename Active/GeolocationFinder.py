from googleplaces import GooglePlaces
import pandas as pd

x = 0
google_api_key = input("Key: ")
google_places = GooglePlaces(google_api_key)
df = pd.DataFrame.from_csv(path=r'C:\Users\Mitch\Projects\Data\Courses.csv')

def add_geo_data(location, keyword):
    
    global x
    global df
    global google_api_key
    global google_places

    query_result = google_places.nearby_search(location=location,keyword=keyword, radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1

def main():

    global df

    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)
    df.rename(columns={'1': 'Par'}, inplace=True)
    add_geo_data('Orlando, Florida', 'Bay Hill Club and Lodge')
    add_geo_data('Dallas, Texas', 'Prestion Trail Golf')
    add_geo_data('Irving, Texas', 'TPC Las Colinas')
    add_geo_data('St. Louis, Missouri', 'Bellerive Country Club')
    add_geo_data('Cherry Hills Village, Colorado', 'Cherry Hills Country Club')
    '''
    query_result = google_places.nearby_search(location='Fort Worth, Texas',keyword='Colonial Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Memphis, Tennessee',keyword='TPC Southwind', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Coal Valley, Illinois',keyword='Oakwood Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Playa del Carmen',keyword='El Camaleon', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Tulsa, Oklahoma',keyword='Southern Hills Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Bloomfield Township, Michigan',keyword='Oakland Hills Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Akron, Ohio',keyword='Firestone Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Bethesda, Maryland',keyword='Congressional Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Pittsford, New York',keyword='Oak Hill Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Mamaroneck, New York',keyword='Winged Foot Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Sammamish, Washington',keyword='Sahalee Country Club', radius=50000)
    df.iloc[x,2] = query_result.places[0].geo_location['lat']
    df.iloc[x,3] = query_result.places[0].geo_location['lng']
    x += 1
    query_result = google_places.nearby_search(location='Springfield Township, New Jersey',keyword='Baltusrol Golf Club', radius=50000)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1
    query_result = google_places.nearby_search(location='Mississaugua, Ontario',keyword='Mississaugua Golf and Country Club', radius=50000)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1
    query_result = google_places.nearby_search(location='Montreal, Quebec',keyword='Royal Montreal Golf Club', radius=50000)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1
    query_result = google_places.nearby_search(location='Montreal, Quebec',keyword='Royal Montreal Golf Club', radius=50000)
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()
    '''
    print(df)

if __name__ == "__main__":
    main()
