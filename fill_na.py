import pandas as pd
import numpy as np
from sklearn import linear_model
from matplotlib import pyplot as plt

pd.set_option('display.max_columns',10)
pd.set_option('display.width',1000)
pd.set_option('display.max_colwidth',20)

def return_x_and_y(frame):
    df = frame
    col_data = ['UTC Offset','Precipitation Intensity',
                'Precipitation Intensity Error','Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']
    x = df[col_data]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)
    return x, y

def replace_nan_multiple_regression(data):
    print(data)

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

    df = df[df['Temperature'].isnull()]
    courses = list(set(list(df['Course'])))
    print(courses)

    #linreg = linear_model.LinearRegression()

    #numeric_columns = df.select_dtypes(include=[int,float]).columns
    #df = df[numeric_columns]
    #df = df.drop(['Score','UTC Offset'],axis=1)
    #temp_df = df
    #df = df.dropna()

    #xdf = df.drop(['Temperature'],axis=1)
    #x = np.asarray(xdf).reshape(xdf.shape[0],xdf.shape[1])
    #ydf = df['Temperature']
    #y = np.asarray(ydf).reshape(ydf.shape[0],1)

    #linreg.fit(x,y)
    
    #print("Intercept " + str(linreg.intercept_[0]))
    #for x in range(len(xdf.columns)):
        #print(xdf.columns[x],linreg.coef_[0][x])

    #temp_df = temp_df[temp_df['Temperature'].isnull()]
    #print(temp_df)

if __name__=="__main__":
    main()
