import pandas as pd
import time
import numpy as np
from sklearn import linear_model, metrics

pd.set_option('display.width',170)
pd.set_option('display.max_columns',100)
pd.set_option('display.max_rows',100)

def return_x_and_y(frame):
    df = frame
    col_data = ['Latitude','Longitude','Precipitation Intensity',
                'Precipitation Probability',
                'Temperature','Apparent Temperature','Dew Point','Humidity',
                'Pressure','Wind Speed','Wind Gust','Wind Bearing',
                'Cloud Cover','Visibility']
    col_data = [x for x in col_data if x in frame.columns]
    x = df[col_data]
    x = np.asarray(x).reshape(x.shape[0],x.shape[1])
    y = df[['Score']]
    y = np.asarray(y).reshape(y.shape[0],1)
    return x, y

def error(row):
    return row[1] - row[0]

def error_mod(row):
    error = 0
    if row[1] - row[0] > 0:
        error = row[1] - row[0]
    return error

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    numeric_columns = df.select_dtypes(include=[int,float]).columns

    mean_df = df.fillna(df[numeric_columns].mean())
    golfer = mean_df
    #golfer = golfer.loc[golfer['Golfer'] == 'Rory McIlroy']
    golfer = golfer.drop(['Precipitation Intensity Error'],axis=1)
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
    df['error'] = df.apply(lambda row: error(row),axis=1)
    df['error mod'] = df.apply(lambda row: error_mod(row),axis=1)
    correct = list(df['error'].values >=0)

    acc = metrics.accuracy_score(test_y, preds)
    prec = metrics.precision_score(test_y, preds,average='micro')

    print('No Drop')
    print('Error: ' + str(sum(abs(df['error'].values))))
    print('Squared Error: ' + str(sum(df['error'].values**2)))
    print('Error Mod: ' + str(sum(abs(df['error mod'].values))))
    print('Squared Error Mod: ' + str(sum(df['error mod'].values**2)))
    print('Accuracy: ' + str(acc))
    print('Precision: ' + str(prec))
    print('Hit rate: ' + str(correct.count(True)/len(correct)))
    print()
    
    #temp_golfer = golfer.drop(['Latitude'],axis=1)
    #temp_golfer = golfer.drop(['Longitude'],axis=1)
    temp_golfer = golfer.drop(['Precipitation Intensity'],axis=1)
    temp_golfer = golfer.drop(['Precipitation Probability'],axis=1)

    test = round(temp_golfer.shape[0]/5)
    train_df = temp_golfer[:(temp_golfer.shape[0]-test)]
    test_df = temp_golfer[(temp_golfer.shape[0]-test):]

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
    df['error'] = df.apply(lambda row: error(row),axis=1)
    df['error mod'] = df.apply(lambda row: error_mod(row),axis=1)
    correct = list(df['error'].values >=0)

    acc = metrics.accuracy_score(test_y, preds)
    prec = metrics.precision_score(test_y, preds,average='micro')
    print('Precipitation Drop')
    print('Error: ' + str(sum(abs(df['error'].values))))
    print('Squared Error: ' + str(sum(df['error'].values**2)))
    print('Error Mod: ' + str(sum(abs(df['error mod'].values))))
    print('Squared Error Mod: ' + str(sum(df['error mod'].values**2)))
    print('Accuracy: ' + str(acc))
    print('Precision: ' + str(prec))
    print('Hit rate: ' + str(correct.count(True)/len(correct)))
    print()



    


















if __name__=="__main__":
    print()
    start = time.time()
    main()
    end = time.time()
    print('Runtime: ' + str(end-start))
