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

def replace_nan_with_means():
    x = 0

def replace_nan_with_medians():
    x = 0

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
    
    #Build data
    
    #Handle Nan with various estimations
    #Via average
    #Via prediction from other attributes
    df_na_drop = df.dropna()
    x = df_na_drop[['UTC Offset','Precipitation Intensity',
            'Precipitation Intensity Error','Precipitation Probability',
            'Temperature','Apparent Temperature','Dew Point','Humidity',
            'Pressure','Wind Speed','Wind Gust','Wind Bearing',
            'Cloud Cover','Visibility']]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df_na_drop[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)

    linreg = linear_model.LinearRegression()
    linreg.fit(x,y)

    pred = linreg.predict(x)
    residuals = pred - y

    print("RESIDUAL MEAN")
    print(np.mean(residuals))
    print("RESIDUAL STD")
    print(np.std(residuals))
    print()
    for x in range(len(np.histogram(residuals,bins=[x for x in range(-15,20)])[0])):
        first = np.histogram(residuals,bins=[x for x in range(-15,20)])[0][x]
        second = np.histogram(residuals,bins=[x for x in range(-15,20)])[1][x]
        print(first,second)
        
    
    #mse = mean_squared_error(test_y, pred)
    #print(linreg.intercept_,linreg.coef_,mse)

if __name__=="__main__":
    main()
