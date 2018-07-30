import time
import numpy as np
import pandas as pd
from sklearn.preprocessing import normalize

pd.set_option('display.width',170)
pd.set_option('display.max_columns',100)
pd.set_option('display.max_rows',100)

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    num_col = ['Score','Latitude','Longitude','UTC Offset',
               'Precipitation Intensity','Precipitation Intensity Error',
               'Precipitation Probability','Temperature',
               'Apparent Temperature','Dew Point','Humidity','Pressure',
               'Wind Speed','Wind Gust','Wind Bearing','Cloud Cover',
               'Visibility']
    golfer = df[num_col]
    golfer = golfer.fillna(golfer.mean())
    to_drop = ['UTC Offset','Apparent Temperature','Dew Point','Humidity',
               'Precipitation Intensity Error','Cloud Cover']
    golfer = golfer.drop(to_drop,axis=1)
    data = pd.DataFrame(normalize(golfer,axis=0))
    corr = data.corr()
    corr.columns = golfer.columns
    corr.index = golfer.columns
    print(corr)

    #golfer = golfer.drop(['UTC Offset','Apparent Temperature','Dew Point'],axis=1)
    #corr = golfer.corr()
    #vals = corr.values[0][1:]
    #vals = [abs(x) for x in vals]
    
    #print(corr)
    #print() 
    #print(np.mean(vals)+ 3*np.std(vals))
    #print(np.mean(vals)+ 2*np.std(vals))
    #print(np.mean(vals)+ np.std(vals))
    #print(np.mean(vals))
    #print(np.mean(vals)- np.std(vals))
    #print(np.mean(vals)- 2*np.std(vals))
    #print(np.mean(vals)- 3*np.std(vals))

if __name__=="__main__":
    print()
    start = time.time()
    main()
    end = time.time()
    print()
    print('Runtime: ' + str(end-start))
