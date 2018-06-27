import pandas as pd
import numpy as np
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.max_rows',1000)
pd.set_option('display.width',1000)

def sync(lats, row):
    try:
        return lats[row[2]]
    except KeyError:
        new_lat = np.argmin([abs((x-row[2])) for x in sorted(lats.keys())])
        key = sorted(lats.keys())[new_lat]
        return lats[key]

def main():
    
    ddf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    sdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\timezones.csv', index_col = 'Unnamed: 0')
    lats = {}
    count = 0
    for index, row in sdf.iterrows():
        lats[row['0']] = row['4']
    ddf['To UTC'] = ddf.apply(lambda row: sync(lats,row),axis=1)
    print(ddf)
    ddf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\course_date_lat_lng_toUTC.csv')

if __name__=="__main__":
    main()
