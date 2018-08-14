import time
import pandas as pd
import numpy as np

pd.set_option('display.width',500)

def grade(data):
    grades = []
    for x in data:
        if str(x[7]) == 'nan':
            grades += [input(x[0] + ", " + x[1] + ", " + x[2] + ": ")]
        else:
            grades += [x[7]]
    final = []
    for x in grades:
        if x == 'w' or x == 'WIN':
            final += ['WIN']
        elif x == 'l' or x == 'LOSS':
            final += ['LOSS']
        elif x == 'p' or x == 'PUSH':
            final += ['PUSH']
        elif x == 'c' or x == 'CANCEL':
            final += ['CANCEL']
        else:
            final += [np.nan]
    return final

def main():
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\History.csv')
    df['Grade'] = grade(np.asarray(df))
    print(df)
    df.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\History.csv',index=False)

if __name__=='__main__':
    start = time.time()
    main()
    end = time.time()
    print('Runtime: ' + str(round(end-start,2)) + ' seconds')
