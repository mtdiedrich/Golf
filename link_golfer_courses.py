import pandas as pd

pd.set_option('display.max_columns',11)
pd.set_option('display.width',1000)

def main():
    gdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\golfers.csv',index_col = 'Unnamed: 0',encoding = 'latin1')
    cdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses.csv',index_col = 'Unnamed: 0')
    rounds = []
    x = 0
    for index, row in gdf.iterrows():
        x += 1
        latitude = 0
        longitude = 0
        for index, c_row in cdf.iterrows():
            if c_row['Course Name'] == row['2']:
                latitude = c_row['Latitude']
                longitude = c_row['Longitude']
        rounds += [[row['0'],row['1'],row['2'],row['3'],row['4'],latitude,longitude]]
        rounds += [[row['0'],row['1'],row['2'],row['5'],row['6'],latitude,longitude]]
        rounds += [[row['0'],row['1'],row['2'],row['7'],row['8'],latitude,longitude]]
        rounds += [[row['0'],row['1'],row['2'],row['9'],row['10'],latitude,longitude]]
        print("Percent Done: " + str(100 * float(x)/len(gdf['0'])))
    ndf = pd.DataFrame(rounds)
    ndf.dropna(subset=[4],inplace=True)
    ndf.reset_index(inplace=True)
    print(ndf)

if __name__ == "__main__":
    main()
