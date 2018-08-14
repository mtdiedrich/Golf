import LogisticRegressionModel
import pandas as pd
import numpy as np

pd.set_option('display.width',1000)

def implied_probabilities(values):
    probabilities = []
    for x in values:
        odds = [x[1],x[3]]
        temp_probabilities = []
        for y in odds:
            if y > 0:
                probability = 100/(y+100)
            else:
                probability = abs(y)/(abs(y)+100)
            temp_probabilities += [probability]
        probabilities += [temp_probabilities]
    return probabilities

def kelly_criterion(data):
    kelly = []
    for x in data:
        kelly += [np.sqrt(np.sqrt(100*(x[4]-x[3])/(1-x[3])))]
    return kelly

def main():

    logreg = LogisticRegressionModel.Model(r'C:\Users\Mitch\Projects\Golf\Data\Lines.csv')
    cont = True
    try:
        evals = logreg.evaluate()
    except AttributeError:
        print('Resolve above issue before continuing')
        cont = False
    if cont:
        implied = implied_probabilities(np.asarray(logreg.lines))
        ip = pd.DataFrame(implied)
        ip.columns = ['First Implied','Second Implied']
        df = pd.concat([logreg.lines,ip],axis=1)
        first_df = df[['First Golfer','Second Golfer','First Odds','First Implied']]
        second_df = df[['Second Golfer','First Golfer','Second Odds','Second Implied']]
        cols = ['Golfer','Matchup','Odds','Implied']
        first_df.columns = cols
        second_df.columns = cols
        df = pd.concat([first_df,second_df])
        df = df.reset_index(drop=True)
        projections = {}
        for x in evals:
            for y in x.keys():
                projections[y] = x[y]
        df['Prediction'] = [projections[x] for x in list(df['Golfer'])]
        df['Kelly'] = kelly_criterion(np.asarray(df))
        df['Date'] = [list(logreg.lines['Date'])[0] for x in range(df.shape[0])]
        df = df.dropna()
        print(df)

if __name__=="__main__":
    main()
