from googleplaces import GooglePlaces
import pandas as pd
import numpy as np

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
    df.iloc[x,2] = round(query_result.places[0].geo_location['lat'],7)
    df.iloc[x,3] = round(query_result.places[0].geo_location['lng'],7)
    x += 1

def main():

    global df

    df['Latitude'] = 0
    df['Longitude'] = 0
    df.rename(columns={'0': 'Course Name'}, inplace=True)
    df.rename(columns={'1': 'Par'}, inplace=True)
    '''
    add_geo_data('Orlando, Florida', 'Bay Hill Club and Lodge')
    add_geo_data('Dallas, Texas', 'Prestion Trail Golf')
    add_geo_data('Irving, Texas', 'TPC Las Colinas')
    add_geo_data('St. Louis, Missouri', 'Bellerive Country Club')
    add_geo_data('Cherry Hills Village, Colorado', 'Cherry Hills Country Club')
    add_geo_data('Fort Worth, Texas', 'Colonial Country Club')
    add_geo_data('Memphis, Tennessee', 'TPC Southwind')
    add_geo_data('Coal Valley, Illinois', 'Oakwood Country Club')
    add_geo_data('Playa del Carmen', 'El Camaleon')
    add_geo_data('Tulsa, Oklahoma', 'Southern Hills Country Club')
    add_geo_data('Bloomfield Township, Michigan', 'Oakland Hills Country Club')
    add_geo_data('Akron, Ohio','Firestone Country Club')
    add_geo_data('Bethesda, Maryland','Congressional Country Club')
    add_geo_data('Pittsford, New York','Oak Hill Country Club')
    add_geo_data('Mamaroneck, New York','Winged Foot Country Club')
    add_geo_data('Sammamish, Washington','Sahalee Country Club')
    add_geo_data('Springfield Township, New Jersey','Baltusrol Golf Club')
    add_geo_data('Mississaugua, Ontario','Mississaugua Golf and Country Club')
    add_geo_data('Montreal, Quebec','Royal Montreal Golf Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('Ancaster, Ontario','Hamilton Golf and Country Club')
    add_geo_data('Vancouver, British Columbia','Essex Golf and Country Club')

    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    add_geo_data('LaSalle, Ontario','Essex Golf and Country Club')
    '''
    query_result = google_places.nearby_search(location='Hattiesburg, Mississippi',keyword='Hattiesburg Country Club', radius=50000)

    with pd.option_context('display.max_rows', 200):
        print(df)

    for place in query_result.places:
        # Returned places from a query are place summaries.
        print(place.name)
        print(place.geo_location)
        print()

if __name__ == "__main__":
    main()
