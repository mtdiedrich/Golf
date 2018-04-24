import pandas as pd
import datetime as dt
import sys
sys.path.insert(0, r'C:\Users\Mitch\Projects\PycharmProjects\darkskylib-master')
from darksky import forecast

def main():

    IC = ('6c02739879c5b450bb2f2794ba61ddeb', 41.3949, -91.3147)
    time = dt.datetime(2018,4,24,16).isoformat()
    iowa_city = forecast(*IC,time=time)
    print(iowa_city.temperature, iowa_city.windSpeed, iowa_city.windGust)

if __name__ == "__main__":
    main()