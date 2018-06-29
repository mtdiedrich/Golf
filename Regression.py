import pandas as pd
import numpy as np
from sklearn import linear_model

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    linreg = linear_model.LinearRegression()
    ndf = df[['Score','Precipitation','Wind Speed']]
    ndf = ndf.dropna()
    x = ndf[['Precipitation','Wind Speed']].reset_index(drop=True)
    x = np.asarray(x).reshape(x.shape[0],2)
    y = ndf['Score'].reset_index(drop=True)
    y = np.asarray(y).reshape(y.shape[0],1)
    linreg.fit(x,y)
    print(df)
    print(linreg.intercept_, linreg.coef_)

if __name__=="__main__":
    main()
