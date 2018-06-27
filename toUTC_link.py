import pandas as pd
import darksky as ds
from datetime import datetime as dt
from zone_link import sync

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)

def main():
    
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    tdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\timezones.csv', index_col = 'Unnamed: 0')
    lats = {}
    for index, row in tdf.iterrows():
        lats[row['0']] = row['4']
    df['To UTC'] = df.apply(lambda row: sync(lats,row),axis=1)
    print(df)
    df.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\course_date_lat_lng_toUTC.csv')

if __name__=="__main__":
    main()
