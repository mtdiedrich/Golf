import pandas as pd
import time
import numpy as np
from sklearn import linear_model

pd.set_option('display.width',150)
pd.set_option('display.max_coumns',100)



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

    mean_df = df.fillna(df[numeric_columns].mean())
    #mean_df = mean_df.drop(['Precipitation Intensity Error'],axis=1)
    mean_x = return_x_and_y(mean_df)[0]
    
    golfer = mean_df.loc[mean_df['Golfer'] == 'Rory McIlroy']
    golfer = golfer.sample(frac=1).reset_index(drop=True)

    test = round(golfer.shape[0]/5)
    train_df = golfer[:(golfer.shape[0]-test)]
    test_df = golfer[(golfer.shape[0]-test):]

    train_x, train_y = return_x_and_y(train_df)
    test_x, test_y = return_x_and_y(test_df)
    
    logreg = linear_model.LogisticRegression()
    logreg.fit(train_x,train_y.ravel())

    preds = logreg.predict(test_x)
    probs = logreg.predict_proba(test_x)
    data = []
    for x in range(len(preds)):
        data += [np.concatenate((test_y[x],np.array([preds[x]]),probs[x]),axis=0)]
    df = pd.DataFrame(data)
    df[0] = df[0].apply(lambda row: int(row))
    df[1] = df[1].apply(lambda row: int(row))
    df.columns = np.concatenate((np.array(['Score','prediction']), logreg.classes_),axis=0)
    print(df)


if __name__=="__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
