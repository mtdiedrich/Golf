import pandas as pd
from operator import itemgetter

pd.set_option('display.max_columns',20)
pd.set_option('display.width',1000)

def main():

    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\golfers.csv', index_col='Unnamed: 0', encoding = 'latin1')
    pairs = []
    y = 0
    for index, row in df.iterrows():
        y += 1
        temp_pairs = []
        temp_pairs += [(row['2'],row['3'])]
        temp_pairs += [(row['2'],row['5'])]
        temp_pairs += [(row['2'],row['7'])]
        temp_pairs += [(row['2'],row['9'])]
        for x in temp_pairs:
            if x not in pairs:
                pairs += [x]
        print(float(y)/len(df['0']))
    pairs.sort(key=itemgetter(0))
    ndf = pd.DataFrame(pairs) 
    print(ndf)
      
if __name__=="__main__":
    main()
