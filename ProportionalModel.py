import itertools
import pandas as pd
import numpy as np

pd.set_option('display.width',175)
pd.set_option('display.max_columns',40)
pd.set_option('display.max_rows',2500)

class ProportionalModel:

    def __init__(self,full=False):
        self.df = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\full_data.csv',encoding='latin1')
        self.df['Score'] = self.df['Score'].apply(lambda row: int(row))
        if full:
            self.golfers = list(set(list(self.df['Golfer'])))
            self.golfers_dfs = [self.df.loc[self.df['Golfer'] == x][['Golfer','Date','Score']] for x in self.golfers]
    
    def set_golfers(self,golfers):
        df = self.df
        self.golfers = golfers
        self.golfers_dfs = [df.loc[df['Golfer'] == x][['Golfer','Date','Score']] for x in golfers]

    def get_proportions(self):
        lists_scores = [list(x['Score']) for x in self.golfers_dfs]
        scores = list(set(itertools.chain.from_iterable(lists_scores)))
        proportions = []
        for x in self.golfers_dfs:
            length = x.shape[0]
            count = x['Score'].value_counts()
            proportion = count/count.sum()
            proportions += [proportion]
        proportions_df = pd.concat(proportions,axis=1)
        proportions_df = proportions_df.fillna(0)
        proportions_df.columns = [x for x in self.golfers]
        return proportions_df

    def get_downward_cumulative_proportions(self):
        proportions = self.get_proportions()
        cumulative_proportions = []
        column_titles = []
        for x in self.golfers:
            column_titles += [x]
            golfer_proportions = np.flip(np.asarray(proportions[x]),axis=0)
            temp_prop = 0
            temp_proportions = []
            for y in golfer_proportions:
                temp_proportions += [temp_prop]
                temp_prop += y
            cumulative_proportions += [np.flip(temp_proportions,axis=0)]
        downward_cumulative_proportions = pd.DataFrame(cumulative_proportions).T
        downward_cumulative_proportions.columns = column_titles
        downward_cumulative_proportions.index = proportions.index
        return downward_cumulative_proportions

    def get_upward_cumulative_proportions(self):
        proportions = self.get_proportions()
        cumulative_proportions = []
        column_titles = []
        for x in self.golfers:
            column_titles += [x]
            golfer_proportions = np.asarray(proportions[x])
            temp_prop = 0
            temp_proportions = []
            for y in golfer_proportions:
                temp_prop += y
                temp_proportions += [temp_prop]
            cumulative_proportions += [temp_proportions]
        upward_cumulative_proportions = pd.DataFrame(cumulative_proportions).T
        upward_cumulative_proportions.columns = column_titles
        upward_cumulative_proportions.index = proportions.index
        return upward_cumulative_proportions

    def evaluate(self):
        proportions = self.get_proportions()
        dcp = self.get_downward_cumulative_proportions()
        evaluations = {golfer: 0 for golfer in self.golfers}
        push_probability = 1
        for x in proportions.index:
            for y in self.golfers:
                probability = proportions[y][x]
                for z in self.golfers:
                    if y != z:
                        probability *= dcp[z][x]
                evaluations[y] += probability
                push_probability -= probability
        evaluations['Push'] = push_probability
        return evaluations

    def get_age_proportions(self):
        gdfs = self.golfers_dfs
        dfs = []
        for x in gdfs:
            temp_df = x.sort_values(by='Date')
            temp_df = temp_df.reset_index(drop=True)
            dfs += [temp_df]
        df = pd.concat(dfs)
        dfs = [df.loc[df.index == x] for x in list(set(list(df.index)))]
        lists_scores = [list(x['Score']) for x in dfs]
        scores = list(set(itertools.chain.from_iterable(lists_scores)))
        proportions = []
        for x in dfs:
            length = x.shape[0]
            count = x['Score'].value_counts()
            proportion = count/count.sum()
            proportions += [proportion]
        proportions_df = pd.concat(proportions,axis=1)
        proportions_df = proportions_df.fillna(0)
        proportions_df.columns = [x for x in range(proportions_df.shape[1])]
        return proportions_df.T

