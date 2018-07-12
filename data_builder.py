import pandas as pd
import numpy as np
from dask import dataframe as dd
from html_parser import similar

pd.set_option('display.max_columns',12)
pd.set_option('display.max_rows',10000000)

global geo_dict
global correction_dict
geo_dict = {}
correction_dict = {}

def assign_lat(row):
    return(geo_dict[row[1]][0])

def assign_lng(row):
    return(geo_dict[row[1]][1])

def predict_course(row):
    similarity = []
    course = None
    courses = sorted(geo_dict.keys())
    for x in courses:
        similarity += [similar(x,row[0])]
    ind = np.argmax(similarity)
    return courses[ind]


def create_geodata_dict(row):
    geo_dict[row['Course']] = (row['Latitude'],row['Longitude'])

def create_correction_dict(row):
    correction_dict[row[0]] = (row['SimPred'],row['Latitude'],row['Longitude'])

def main():
    
    #Link with timezone data
    #Link w/weather data (may need to redo API calls)

    #Suppress warnings
    #remove unncessary DataFrames

    #Consider rewriting in such a way that the code will run even if it cannot
    #find input files, but will catch error and instruct user which file needs
    #to be run to catch up

    gdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\golfers.csv',index_col='Unnamed: 0',encoding='latin1')
    gdf.columns = ['Golfer','Tournament','Course','Date 1','Score 1','Date 2','Score 2','Date 3','Score 3','Date 4','Score 4']

    hard_coded_changes = {'Mission Hills GC (Olazabal)':'Mission Hills (Olazabal)'}
    for x in hard_coded_changes.keys():
        gdf.loc[gdf['Course'] == x, 'Course'] = hard_coded_changes[x]

    cdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\Courses.csv', index_col = 'Unnamed: 0')
    cdf.columns = ['Course','Score','Latitude','Longitude'] 

    tdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\lat_lng_utc.csv',encoding='latin1')
    tdf.columns = ['Latitude','Longitude','UTC Offset'] 

    wdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather.csv',encoding='latin1')
    
    df = gdf.merge(cdf,'outer',['Course'])
    ndf = df[df['Latitude'].isnull()]

    cdf.apply(lambda row: create_geodata_dict(row),axis=1)


    udf = pd.DataFrame(list(set(list(ndf['Course']))))
    udf['SimPred'] = udf.apply(lambda row: predict_course(row),axis=1)
    udf['Latitude'] = udf.apply(lambda row: assign_lat(row),axis=1)
    udf['Longitude'] = udf.apply(lambda row: assign_lng(row),axis=1)
    
    udf.apply(lambda row: create_correction_dict(row),axis=1)


    for x in correction_dict.keys():
        #Would this be faster via apply or vectorization?
        #More likely than not, I can improve performance via creating a dict 
        #for which every correctly named course is a key for itself, and every
        #incorrectly named course is a key for the corresponding correct course.
        #Then apply to the DataFrame a function that renames the course by
        #passing the current coursename to the dict. Then I can use the for
        #loop below without having to do the iteration here.
        ndf.loc[ndf['Course'] == x, 'Latitude'] = correction_dict[x][1]
        ndf.loc[ndf['Course'] == x, 'Longitude'] = correction_dict[x][2]
        ndf.loc[ndf['Course'] == x, 'Course'] = correction_dict[x][0]
        
    df = pd.concat([df,ndf])

    df = df.dropna(subset=['Golfer'])
    df1 = df[['Golfer','Tournament','Course','Date 1','Score 1']]
    df2 = df[['Golfer','Tournament','Course','Date 2','Score 2']]
    df3 = df[['Golfer','Tournament','Course','Date 3','Score 3']]
    df4 = df[['Golfer','Tournament','Course','Date 4','Score 4']]
    df1.columns = df2.columns = df3.columns = df4.columns = ['Golfer','Tournament','Course','Date','Score']
    df = pd.concat([df1,df2,df3,df4])
    df.loc[df['Score'] > 100, 'Score'] = np.nan
    df = df.dropna(subset=['Score'])
    df = df.reset_index(drop=True)
    
    for x in geo_dict.keys():
        #Would this be faster via apply or vectorization?
        #Can this be combined with the for loop above?
        df.loc[df['Course'] == x, 'Latitude'] = geo_dict[x][0]
        df.loc[df['Course'] == x, 'Longitude'] = geo_dict[x][1]


    df = df.merge(tdf,how='outer',on=['Latitude','Longitude'])
    df = df.dropna(subset=['Golfer'])

    fdf = df.merge(wdf,how='outer',on=['Latitude','Longitude','Date'])

    ndf = df[df['Latitude'].isnull()]
    print(ndf[['Golfer','Course','Latitude','Longitude']])
    for x in (sorted(list(set(list(fdf['Course']))))):
        print(x)

    #df.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',index=False)

if __name__=="__main__":
    main()

