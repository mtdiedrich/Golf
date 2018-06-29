import pandas as pd

pd.set_option('display.max_columns',20)
pd.set_option('display.width', 1000)


def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\weather_data_0_through_899.csv')
    rdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\individual_rounds.csv',index_col='Unnamed: 0',encoding='latin1')
    df.columns = ['Course','Date'] + list(df.columns[2:])
    rdf.drop(['index'],axis=1)
    print(rdf)


if __name__=="__main__":
    main()
