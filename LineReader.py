import pandas as pd

class Reader:

    def __init__(self):
        x = 0

    def load_lines(self,line_file):
        df = pd.read_fwf(line_file)
        print(df)
