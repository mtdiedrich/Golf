import pandas as pd

def main():

    df1 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_0_through_899.csv')
    df2 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_900_through_1799.csv')
    df3 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_1800_through_2699.csv')
    df4 = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_2700_through_3599.csv')
    # This block is unnecessary if you fix the cause at the source
    df1 = df1.rename(index=str,columns={'Longiude':'Longitude'})
    df2 = df2.rename(index=str,columns={'Longiude':'Longitude'})
    df3 = df3.rename(index=str,columns={'Longiude':'Longitude'})
    df4 = df4.rename(index=str,columns={'Longiude':'Longitude'})

    df = pd.concat([df1,df2,df3,df4])
    rdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\individual_rounds.csv',encoding='latin1')
    df.columns = ['Course','Date'] + list(df.columns[2:])
    mdf = df.merge(rdf, how = 'outer', on = ['Course','Date'])
    cols = list(mdf.columns[:len(mdf.columns)-3]) + list(mdf.columns[len(mdf.columns)-3:])     
    mdf = mdf[cols]
    print(mdf)
    mdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv', index=False)


if __name__=="__main__":
    main()