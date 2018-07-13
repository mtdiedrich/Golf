import random
import math
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)
pd.set_option('display.max_colwidth',10)

def replace_nan_with_linreg():
    x = 0

def replace_nan_with_multreg():
    x = 0

def replace_nan_with_ridgereg():
    x = 0

def replace_nan_with_lasso():
    x = 0

def replace_nan_with_sgd():
    x = 0

def replace_nan_with_svr():
    x = 0

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')

    corr_mat = df.corr()
    corr_mat.columns = [f[0:8] for f in corr_mat.columns]
    print(corr_mat)
    print() 
    
    #BUILD DATA
    numeric_columns = df.select_dtypes(include=[int,float]).columns
    col_data = ['UTC Offset','Precipitation Intensity',
                'Precipitation Intensity Error','Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']

    #WRITE A METHOD THAT TAKES IN THE FRAME AND RETURNS (X,Y)

    #Nan drop
    na_drop_df= df.dropna()
    na_drop_x = na_drop_df[col_data]
    na_drop_x = np.asarray(na_drop_x).reshape(na_drop_x.shape[0],na_drop_x.shape[1])
    na_drop_y = na_drop_df[['Score']]
    na_drop_y = np.asarray(na_drop_y).reshape(na_drop_y.shape[0],1)

    #Nan mean replacement
    mean_df = df
    for x in numeric_columns:
        mean_df[x] = mean_df[x].fillna(mean_df[x].mean())
    mean_x = mean_df[col_data]
    mean_x = np.asarray(mean_x).reshape(mean_x.shape[0],mean_x.shape[1])
    mean_y = mean_df[['Score']]
    mean_y = np.asarray(mean_y).reshape(mean_y.shape[0],1)
    
    #Nan mean replacement by course
    #Nan mean replacement by tournament
    #Nan median replacement
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
