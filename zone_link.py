import pandas as pd
from datetime import datetime as dt

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)

def sync(lats, row):
    try:
        return lats[row[2]]
    except KeyError:
        new_lat = min([abs((x-row[2])) for x in lats.keys()]) + row[2]
        return new_lat

def main():
    
    ddf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    sdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\timezones.csv', index_col = 'Unnamed: 0')
    lats = {}
    count = 0
    for index, row in sdf.iterrows():
        lats[row['0']] = row['4']
    ddf['To UTC'] = ddf.apply(lambda row: sync(lats,row),axis=1)
    print(ddf)

if __name__=="__main__":
    main()
