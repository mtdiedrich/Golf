import pandas as pd
import numpy as np
from sklearn import linear_model
from matplotlib import pyplot as plt



def main():

    cols = ['Golfer','Tournament','Course','Date','Score','Latitude',
            'Longitude','UTC Offset','Summary','Precipitation Intensity',
            'Precipitation Intensity Error','Precipitation Probability',
            'Precipitation Type','Temperature','Apparent Temperature',
            'Dew Point','Humidity','Pressure','Wind Speed','Wind Gust',
            'Wind Bearing','Cloud Cover','Visibility']
    types = [str,str,str,str,float,float,float,float,str,float,float,float,
             str,float,float,float,float,float,float,float,float,float,float]
    data_types = dict(zip(cols,types))
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',dtype=data_types,encoding='latin1')
    df = df.dropna(subset=['Temperature'])

    linreg = linear_model.LinearRegression()

    numeric_columns = df.select_dtypes(include=[int,float]).columns
    df = df[numeric_columns]
    df = df.drop(['Score','UTC Offset'],axis=1)
    ndf = df
    df = df.dropna()

    models = {}

    for i in df.columns:
        xdf = df.drop([i],axis=1)
        x = np.asarray(xdf).reshape(xdf.shape[0],xdf.shape[1])
        ydf = df[i]
        y = np.asarray(ydf).reshape(ydf.shape[0],1)
        models[i] = linreg.fit(x,y)

if __name__=="__main__":
    main()
