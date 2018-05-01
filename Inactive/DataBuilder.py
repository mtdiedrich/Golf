import pandas as pd
import datetime as dt
import sys
sys.path.insert(0, r'C:\Users\Mitch\Projects\PycharmProjects\darkskylib-master')
from darksky import forecast

def main():

    IC = ("API Key", 31.10452, 121.22187)
    time = dt.datetime(2018,4,24,16).isoformat()
    iowa_city = forecast(*IC,time=time)
    print(iowa_city.temperature, iowa_city.windSpeed, iowa_city.windGust)

    df = pd.read_csv(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\JordanSpieth.csv')
    print(df)

if __name__ == "__main__":
    main()
