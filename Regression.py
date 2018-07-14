import pandas as pd
import numpy as np
from sklearn import linear_model

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

    numeric_columns = df.select_dtypes(include=[int,float]).columns
    linreg = linear_model.LinearRegression()
    y = return_x_and_y(df)[1]

    corr_mat = df.corr()
    corr_mat.columns = [f[0:8] for f in corr_mat.columns]
    print(corr_mat)
    print() 

    df = df.dropna(['Temperature'],axis=1)
    golfer = input('Golfer: ')
    #BUILD DATA
    #Nan drop    
    na_drop_df = df.dropna()
    na_drop_df = na_drop_df[['Golfer'==golfer]]
    na_drop_x = return_x_and_y(na_drop_df)[0]
    na_drop_y = return_x_and_y(na_drop_df)[1]
    na_linreg = linear_model.LinearRegression()
    na_linreg.fit(na_drop_x,na_drop_y)

    #Nan mean replacement
    mean_df = df.fillna(df[numeric_columns].mean())
    mean_x = return_x_and_y(mean_df)[0]
    mean_linreg = linear_model.LinearRegression()
    mean_linreg.fit(mean_x,y)

    #Nan median replacement
    median_df = df.fillna(df[numeric_columns].median())
    median_x = return_x_and_y(median_df)[0]
    median_linreg = linear_model.LinearRegression()
    median_linreg.fit(mean_x,y)

    pred = linreg.predict(na_drop_x)
    residuals = pred - na_drop_y

    for x in range(len(np.histogram(residuals,bins=[x for x in range(-15,20)])[0])):
        first = np.histogram(residuals,bins=[x for x in range(-15,20)])[0][x]
        second = np.histogram(residuals,bins=[x for x in range(-15,20)])[1][x]
        print(first,second)
        
    mse = mean_squared_error(test_y, pred)
    print(linreg.intercept_,linreg.coef_,mse)
    


if __name__=="__main__":
    main()
