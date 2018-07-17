import pandas as pd
import time
import numpy as np
from sklearn import svm


def return_x_and_y(frame):
    df = frame
    col_data = ['Latitude','Longitude','Precipitation Intensity',
                'Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']
    x = df[col_data]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)
    return x, y

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    numeric_columns = df.select_dtypes(include=[int,float]).columns
    y = return_x_and_y(df)[1]

    mean_df = df.fillna(df[numeric_columns].mean())
    mean_df = mean_df.drop(['Precipitation Intensity Error'],axis=1)
    mean_x = return_x_and_y(mean_df)[0]

    clf = svm.SVC()
    clf.fit(mean_x,y)

if __name__=="__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
