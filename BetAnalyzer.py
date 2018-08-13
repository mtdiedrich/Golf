import pandas as pd
import numpy as np

pd.set_option('display.width',1000)

def implied_probabilities(values):
    probabilities = []
    for x in values:
        odds = [x[1],x[3]]
        temp_probabilities = []
        for y in odds:
            if y > 0:
                probability = 100/(y+100)
            else:
                probability = abs(y)/(abs(y)+100)
            temp_probabilities += [probability]
        probabilities += [temp_probabilities]
    return probabilities

def main():

    lat = 38.659434
    lng = -90.482938
    data = [['Pat Perez',133,'Henrik Stenson',-160, lat, lng, 2018, 8, 18, -1],
            ['Keegan Bradley',104,'Phil Mickelson',-124,lat, lng, 2018, 8, 18, -1],
            ['Jhonattan Vegas',121,'Matthew Fitzpatrick',-146, lat, lng, 2018, 8, 18, -1],
            ['Haotong Li',108,'Brandt Snedeker',-130,lat,lng,2018,8,18, -1],
            ['Yuta Ikeda',132,'Adam Hadwin',-159,lat,lng,2018,8,18, -1]]
    df = pd.DataFrame(data)
    df.columns = ['Dog','Dog Odds','Favorite','Favorite Odds','Lat','Lng','Year','Month','Day','Hour Offset']
    vals = np.asarray(df)
    implied = implied_probabilities(vals)
    ip = pd.DataFrame(implied)
    ip.columns = ['Dog Implied','Favorite Implied']
    df = pd.concat([df,ip],axis=1)
    df = df[['Favorite','Favorite Odds','Favorite Implied','Dog','Dog Odds','Dog Implied','Lat','Lng','Year','Month','Day','Hour Offset']]
    print(df)


if __name__=="__main__":
    main()
