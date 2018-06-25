import pandas as pd
import darksky as ds
from datetime import datetime as dt

def string_to_date(date):
    year = number_string_to_int(date[0:4])
    month = number_string_to_int(date[5:7])
    day = number_string_to_int(date[8:10])
    time = dt(year,month,day,12)
    return time

def number_string_to_int(number):
    number = number.replace(" ","")
    if number[0] == '0':
        number = number[1:]
    return int(number)

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    weather_data = []
    for index, row in df.iterrows():
        lat = row['2']
        lng = row['3']
        date = string_to_date(row['1'])
        print(date)

if __name__=="__main__":
    main()
