from scipy.stats import gaussian_kde
import numpy as np
import csv

def openFile(file):
    """
    Given a csv of golf scores, returns an list of pairs of scores and tournament dates as datetime
    :param file: csv of scores
    :return: list of golfers scores
    """
    golfer = []
    with open(file, newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            golfer += [row]
    for x in golfer[1]:
        if x != 'Score"':
            golfer[0] += [x]
    golfer[0][8] = 'Total Score'
    del golfer[1]
    npGolfer = np.asarray(golfer)

    return npGolfer

def main():
    golfer = openFile('DustinJohnson.csv')
    print(golfer)

if __name__ == "__main__":
    main()