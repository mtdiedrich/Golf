import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')

    features = [f for f in df.columns][8:]
    features = [features[0]] + [features[2]] + features[4:]
    fdf = df[features]
    fdf.columns = ['Precip Intens','Precip Prob'] + list(fdf.columns[2:])
    corr_mat = fdf.corr()
    print(corr_mat)

    linreg = linear_model.LinearRegression()
    ndf = df[['Score','Precipitation Intensity','Wind Speed']]
    ndf = ndf.dropna()
    x = ndf[['Precipitation Intensity','Wind Speed']].reset_index(drop=True)
    x = np.asarray(x).reshape(x.shape[0],2)
    y = ndf['Score'].reset_index(drop=True)
    y = np.asarray(y).reshape(y.shape[0],1)
    linreg.fit(x,y)
    print(linreg.intercept_, linreg.coef_)

if __name__=="__main__":
    main()
