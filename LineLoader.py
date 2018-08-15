import time
import pandas as pd
import numpy as np

pd.set_option('display.max_columns',10)
pd.set_option('display.width',150)

def parse_date(row):
    date = row[4]
    if 'January' in date:
        month = 1
    elif 'February' in date:
        month = 2
    elif 'March' in date:
        month = 3
    elif 'April' in date:
        month = 4
    elif 'May' in date:
        month = 5
    elif 'June' in date:
        month = 6
    elif 'July' in date:
        month = 7
    elif 'August' in date:
        month = 8
    elif 'September' in date:
        month = 9
    elif 'October' in date:
        month = 10
    elif 'November' in date:
        month = 11
    elif 'December' in date:
        month = 12
    date = date[date[date.find(',')+1:].find(',')+date.find(',')-2:]
    day = date[:3]
    year = date[date.find(',')+1:date.find(',')+6]
    return (str(month)+'/'+str(day)+'/'+str(year)).replace(' ','')

def get_line(row):
    start = row.find('(')
    end = row.find(')')
    return row[start+1:end].replace('+','')

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\Bets.html',delimiter='\n')
    df.columns = ['X']
    df = df.loc[df['X'].str.contains('events-result-set')]
    index = df.index[0]
    string = df['X'][index]
    d = '<'
    s = [d + str(e) for e in string.split(d)]
    d = '>'
    r = []
    for x in s:
        r += [str(e) for e in x.split(d)]
    t = [x for x in r if '<' not in x]
    t = [x for x in t if x != '']
    lists = [[] for x in range(15)]
    for x in range(len(t)):
        lists[x%15] += [t[x]]
    df = pd.DataFrame(lists).T
    df = df[[4,5,7,10,12]]
    df['Date'] = df.apply(lambda row: parse_date(row),axis=1)
    df['First Odds'] = df.apply(lambda row: get_line(row[7]),axis=1)
    df['Second Odds'] = df.apply(lambda row: get_line(row[12]),axis=1)
    df = df[[5,10,'Date','First Odds','Second Odds']]
    df.columns = ['First Golfer','Second Golfer','Date','First Odds','Second Odds']
    df = df[['First Golfer','First Odds','Second Golfer','Second Odds','Date']]
    lat = input('Latitude: ')
    lng = input('Longitude: ')
    df['Latitude'] = [lat for x in range(df.shape[0])]
    df['Longitude'] = [lng for x in range(df.shape[0])]
    drop_list = ['Sean OHair','Vaughan Taylor','C T Pan']
    df = df.loc[~df['First Golfer'].isin(drop_list)]
    df = df.loc[~df['Second Golfer'].isin(drop_list)]
    df.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\Lines.csv',index=False)
    print(df)

if __name__=='__main__':
    start = time.time()
    main()
    end = time.time()
    print('Runtime: ' + str(round(end-start,2)) + ' seconds')
