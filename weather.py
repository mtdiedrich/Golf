import pandas as pd
import darksky as ds

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv', index_col = 'Unnamed: 0')
    print(df)

if __name__=="__main__":
    main()
