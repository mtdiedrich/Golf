import time
import scipy.stats as st
import pandas as pd
import numpy as np

pd.set_option('display.width',500)

def payout(row):
    if row['Grade'] == 'WIN':
        payout = row['Kelly']/row['Implied'] - row['Kelly']
    elif row['Grade'] == 'LOSS':
        payout = -1 * row['Kelly']
    else:
        payout = 0
    return payout

def main():

    metrics = {}
    df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\History.csv')
    wdf = df.loc[df['Grade'] == 'WIN']
    pdf = df.loc[df['Grade'] == 'PUSH']
    ldf = df.loc[df['Grade'] == 'LOSS']
    cdf = df.loc[df['Grade'] == 'CANCEL']
    df = pd.concat([wdf,pdf,ldf])
    df['Payout'] = df.apply(lambda row: payout(row),axis=1)
    winrate = (sum(list(1-wdf['Implied']))+sum(list(1-pdf['Implied'])))/(sum(list(1-wdf['Implied']))+sum(list(ldf['Implied']))+pdf.shape[0])
    
    metrics['Bets'] = df.shape[0]
    metrics['Wins'] = wdf.shape[0]
    metrics['Pushes'] = pdf.shape[0]
    metrics['Losses'] = ldf.shape[0]
    metrics['Cancels'] = cdf.shape[0]
    metrics['Win Rate'] = (wdf.shape[0]+pdf.shape[0]*.5)/(wdf.shape[0]+pdf.shape[0]+ldf.shape[0])
    metrics['Net'] = sum(list(set(list(df['Payout']))))
    metrics['Relative Bank'] = sum(list(set(list(df['Kelly']))))
    metrics['Return'] = metrics['Net']/metrics['Relative Bank']
    metrics['Adjusted Win Rate'] = winrate
    metrics['Mean Payout'] = np.mean(np.asarray(df['Payout']))
    metrics['.95 CI'] = st.t.interval(0.95, len(np.asarray(df['Payout']))-1, loc=np.mean(np.asarray(df['Payout'])), scale=st.sem(np.asarray(df['Payout'])))
    metrics['.99 CI'] = st.t.interval(0.99, len(np.asarray(df['Payout']))-1, loc=np.mean(np.asarray(df['Payout'])), scale=st.sem(np.asarray(df['Payout'])))
    metrics['.999 CI'] = st.t.interval(0.999, len(np.asarray(df['Payout']))-1, loc=np.mean(np.asarray(df['Payout'])), scale=st.sem(np.asarray(df['Payout'])))

    ms = pd.Series(metrics,dtype='object')
    ms = ms[['Bets',
             'Wins',
             'Pushes',
             'Losses',
             'Cancels',
             'Win Rate',
             'Adjusted Win Rate',
             'Relative Bank',
             'Net',
             'Return',
             'Mean Payout',
             '.95 CI',
             '.99 CI',
             '.999 CI']]
    print(ms)


if __name__=='__main__':
    start = time.time()
    main()
    end = time.time()
    print('Runtime: ' + str(round(end-start,2)) + ' seconds')
