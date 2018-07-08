import pandas as pd

def main():

    df1 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_0_through_899.csv')
    df2 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_900_through_1799.csv')
    df3 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_1800_through_2699.csv')
    df4 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_2700_through_3599.csv')
    df5 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_3600_through_4499.csv')
    df6 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_4500_through_5399.csv')
    # This block is unnecessary if you fix the cause at the source
    df1 = df1.rename(index=str,columns={'Longiude':'Longitude'})
    df2 = df2.rename(index=str,columns={'Longiude':'Longitude'})
    df3 = df3.rename(index=str,columns={'Longiude':'Longitude'})
    df4 = df4.rename(index=str,columns={'Longiude':'Longitude'})
    df5 = df5.rename(index=str,columns={'Longiude':'Longitude'})
    df6 = df6.rename(index=str,columns={'Longiude':'Longitude'})

    df = pd.concat([df1,df2,df3,df4,df5,df6])
    rdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\individual_rounds.csv',encoding='latin1')
    df.columns = ['Course','Date'] + list(df.columns[2:])
    mdf = df.merge(rdf, how = 'right', on = ['Course','Date'])
    cols = list(mdf.columns[-3:-1]) + [mdf.columns[-1]] + list(mdf.columns[0:-3])
    #mdf = mdf[cols]
    #print(mdf)
    mdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv', index=False)
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
    print(df)
    #There's a Memory Error thrown when reading in this csv
    #It will have to be handled, but it seems like a mess

if __name__=="__main__":
    main()
