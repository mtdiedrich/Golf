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

    corr_mat = df.corr()
    corr_mat.columns = [f[0:8] for f in corr_mat.columns]
    print(corr_mat)
    print() 
    
    #BUILD DATA
    numeric_columns = df.select_dtypes(include=[int,float]).columns

    #WRITE A METHOD THAT TAKES IN THE FRAME AND RETURNS (X,Y)

    #Nan drop
    na_drop_df= df.dropna()
    na_drop_x = return_x_and_y(na_drop_df)[0]
    na_drop_y = return_x_and_y(na_drop_df)[1]

    #Nan mean replacement
    mean_df = df.fillna(df[numeric_columns].mean())
    mean_x = return_x_and_y(mean_df)[0]
    mean_y = return_x_and_y(mean_df)[1]

    #Nan median replacement
    median_df = df.fillna(df[numeric_columns].median())
    median_x = return_x_and_y(median_df)[0]
    median_y = return_x_and_y(median_df)[1]

    print(median_y)

    #print('here')
    #mean_df = df
    #for x in numeric_columns:
        #mean_df[x] = mean_df[x].fillna(mean_df[x].mean())
    #mean_x = return_x_and_y(mean_df[numeric_columns])[0]
    #mean_y = return_x_and_y(mean_df[numeric_columns])[1]
    #print(mean_df)

    #Nan mean replacement by course
    #Nan mean replacement by tournament
    #Nan median replacement by course
    #Nan median replacement by tournament
    #Nan linreg replacement
    #Nan linreg replacement by course
    #Nan linreg replacement by tournament
    #Nan multreg replacement
    #Nan multreg replacement by course
    #Nan multreg replacement by tournament
    #Nan ridgereg replacement
    #Nan ridgereg replacement by course
    #Nan ridgereg replacement by tournament
    #Nan lasso replacement
    #Nan lasso replacement by course
    #Nan lasso replacement by tournament
    #Nan sgd replacement
    #Nan sgd replacement by course
    #Nan sgd replacement by tournament
    #Nan svr replacement
    #Nan svr replacement by course
    #Nan svr replacement by tournament

    #linreg = linear_model.LinearRegression()
    #linreg.fit(na_drop_x,na_drop_y)

    #pred = linreg.predict(na_drop_x)
    #residuals = pred - na_drop_y

    #print("RESIDUAL MEAN")
    #print(np.mean(residuals))
    #print("RESIDUAL STD")
    #print(np.std(residuals))
    #print()
    #for x in range(len(np.histogram(residuals,bins=[x for x in range(-15,20)])[0])):
        #first = np.histogram(residuals,bins=[x for x in range(-15,20)])[0][x]
        #second = np.histogram(residuals,bins=[x for x in range(-15,20)])[1][x]
        #print(first,second)
        
    #mse = mean_squared_error(test_y, pred)
    #print(linreg.intercept_,linreg.coef_,mse)

if __name__=="__main__":
    main()
