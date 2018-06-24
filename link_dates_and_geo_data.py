import pandas as pd

def main():
    
    cdf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\Courses.csv', index_col = 'Unnamed: 0')
    ddf = pd.read_csv(r'C:\Users\Mitch\Projects\Golf\Data\course_date_pairs.csv', index_col = 'Unnamed: 0')
    print(cdf)
    print(ddf)
    lists = []
    for index, xrow in ddf.iterrows():
        for index, yrow in cdf.iterrows():
            if xrow['0']==yrow['Course Name']:
                lists += [[xrow['0'],xrow['1'],yrow['Latitude'],yrow['Longitude']]]
    ndf = pd.DataFrame(lists)
    ndf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\courses_dates_geodata.csv')
    print(ndf)

if __name__ == "__main__":
    main()
