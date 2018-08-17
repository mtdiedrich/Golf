import time
import numpy as np
import pandas as pd
from collections import Counter

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
    scores = pd.DataFrame(dict([(k,pd.Series(v)) for k,v in rounds.items()]))
    print(scores)


if __name__ == "__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
