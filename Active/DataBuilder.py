import pandas as pd
import datetime as dt
import sys
sys.path.insert(0, r'C:\Users\Mitch\Projects\PycharmProjects\darkskylib-master')
from darksky import forecast

def main():
    BOSTON = ('6c02739879c5b450bb2f2794ba61ddeb', 41.3949, -91.3147)
    time = dt.datetime(2018,4,20,12).isoformat()
    boston = forecast(*BOSTON,time=time)
    print(boston.temperature)

if __name__ == "__main__":
    main()