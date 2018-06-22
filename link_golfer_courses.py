import pandas as pd

pd.set_option('display.max_columns',11)
pd.set_option('display.width',1000)

def main():
    gdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\golfers.csv',index_col = 'Unnamed: 0',encoding = 'latin1')
    ndf = pd.DataFrame()
    for x in range(len(gdf['0'])):
        round_one = pd.Series([gdf.iloc[x].loc['0'], gdf.iloc[x].loc['1'], gdf.iloc[x].loc['2'], gdf.iloc[x].loc['3'], gdf.iloc[x].loc['4']])
        round_two = pd.Series([gdf.iloc[x].loc['0'], gdf.iloc[x].loc['1'], gdf.iloc[x].loc['2'], gdf.iloc[x].loc['5'], gdf.iloc[x].loc['6']])
        round_three = pd.Series([gdf.iloc[x].loc['0'], gdf.iloc[x].loc['1'], gdf.iloc[x].loc['2'], gdf.iloc[x].loc['7'], gdf.iloc[x].loc['8']])
        round_four = pd.Series([gdf.iloc[x].loc['0'], gdf.iloc[x].loc['1'], gdf.iloc[x].loc['2'], gdf.iloc[x].loc['9'], gdf.iloc[x].loc['10']])
        ndf.append(round_one, ignore_index=True)
        ndf.append(round_two, ignore_index=True)
        ndf.append(round_three, ignore_index=True)
        ndf.append(round_four,ignore_index=True)
        print("Percent Done: " + float(x)/len(gdf['0']))
    print(ndf)
        
if __name__ == "__main__":
    main()
