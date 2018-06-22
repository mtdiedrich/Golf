import pandas as pd

pd.set_option('display.max_columns',10)
pd.set_option('display.width',1000)

def main():
    gdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\golfers.csv',encoding = 'latin1')
    cdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses.csv')
    print(gdf)

if __name__ == "__main__":
    main()
