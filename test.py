import time
import ProportionalModel
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.signal import savgol_filter

def main():
    golfer = 'Phil Mickelson'
    propmod = ProportionalModel.ProportionalModel()
    df = propmod.df
    propmod.set_golfers([golfer])
    golfers = list(set(list(df['Golfer'])))
    dfs = [df.loc[df['Golfer'] == g] for g in golfers]
    print(dfs)

if __name__ == "__main__":
    start = time.time()
    main()
    end = time.time()
    print(end-start)
