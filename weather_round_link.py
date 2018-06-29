import pandas as pd

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_0_through_899.csv')
    rdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\individual_rounds.csv',index_col='Unnamed: 0',encoding='latin1')
    df.columns = ['Course','Date'] + list(df.columns[2:])
    rdf = rdf.drop(['index'],axis=1)
    rdf.columns = ['Golfer','Tournament','Course','Date','Score','Latitude','Longitude']
    mdf = rdf.merge(df, how = 'left', on = ['Date', 'Latitude'])
    print(rdf)
    print(mdf)


if __name__=="__main__":
    main()
