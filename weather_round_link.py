import pandas as pd

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_0_through_899.csv')
    df.columns = ['Course','Date'] + list(df.columns[2:])
    print(df)


if __name__=="__main__":
    main()
