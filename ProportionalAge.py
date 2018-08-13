import time
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.signal import savgol_filter

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    df = df[['Golfer','Date','Score']]
    golfers = list(set(list(df['Golfer'])))
    golfers = golfers[:10]
    golfers_dfs = [df.loc[df['Golfer'] == x] for x in golfers]
    dfs = []
    length = 0
    for x in golfers_dfs:
        temp_df = x.sort_values(by='Date')
        if temp_df.shape[0] > length:
            length = temp_df.shape[0]
        temp_df = temp_df.reset_index(drop=True)
        dfs += [temp_df]
    df = pd.concat(dfs)
    dfs = [df.loc[df.index == x] for x in list(set(list(df.index)))]
    for x in dfs:
        print(x)


    """
    rounds = {key: [] for key in range(length-1)}
    for x in dfs:
        for y in rounds.keys():
            try:
                rounds[y] += [x['Score'][y]]
            except KeyError:
                continue
    average_rounds = []
    for x in rounds.keys():
        average_rounds += [int(np.median(rounds[x]))]
    x = [x for x in range(len(average_rounds))]
    y = average_rounds
    plt.plot(x,y,'o')
    yhat = savgol_filter(y,len(y)-len(y)%2-1,3)
    plt.plot(x,yhat,'r-',lw=2)
    plt.show()
    """
if __name__ == "__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
