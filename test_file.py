import pandas as pd

def test_row(row):
    print(row['Latitude'], row['Longitude'])
    
def main():
    gdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses.csv', index_col = 'Unnamed: 0')
    print(gdf)
    gdf = gdf.apply(lambda row: test_row(row), axis=1)

if __name__=="__main__":
    main()

