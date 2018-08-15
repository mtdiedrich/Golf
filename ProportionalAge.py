import time
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.signal import savgol_filter

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    df = df[['Golfer','Date','Score']]
    golfers = list(set(list(df['Golfer'])))
    golfers_dfs = [df.loc[df['Golfer'] == x] for x in golfers]
    dfs = []
    length = 0
    for x in golfers_dfs:
        temp_df = x.sort_values(by='Date')
        if temp_df.shape[0] > length:
            length = temp_df.shape[0]
        temp_df = temp_df.reset_index(drop=True)
        dfs += [temp_df]
    rounds = {key: [] for key in range(length-1)}
    for x in dfs:
        for y in rounds.keys():
            try:
                rounds[y] += [x['Score'][y]]
            except KeyError:
                continue
    proportions = []
    for x in rounds.keys():
        idf = pd.Series(rounds[x])
        count = idf.value_counts()
        proportion = count/count.sum()
        proportions += [proportion]
    pdf = pd.concat(proportions,axis=1)
    pdf = pdf.fillna(0)
    pdf = pdf.T
    pdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\AgeProbs.csv')
    print(pdf)
        
        

if __name__ == "__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
