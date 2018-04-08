from scipy.stats import gaussian_kde
from datetime import datetime
import matplotlib.pyplot as plt
import math
import numpy as np
import csv

# Rewrite this if you care. You don't have to care.

def dateFormatConversion(date):

    month = date[0:2]
    if month[0] == "0":
        month = month[1:]
    day = date[3:5]
    if day[0] == "0":
        day = day[1:]
    year = date[6:]
    if year[0] == "0":
        year = int(year[1:])
    if int(year) < 50:
        year = int(year) + 2000
    else:
        year = int(year) + 1900

    return datetime(year,int(month),int(day))

def main():
    golfer = []
    with open('DustinJohnson.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            golfer += [row]
    for x in golfer[1]:
        if x != 'Score"':
            golfer[0] += [x]
    golfer[0][8] = 'Total Score'
    del golfer[1]
    npGolfer = np.asarray(golfer)
    dateScorePairs = []
    for x in npGolfer:
        if x[0] != 'Date':
            dateScorePairs += [[x[0],x[3]]]
            dateScorePairs += [[x[0],x[4]]]
            dateScorePairs += [[x[0],x[5]]]
            dateScorePairs += [[x[0],x[6]]]
            dateScorePairs += [[x[0],x[7]]]

    for x in dateScorePairs:
        if len(x[0])==7:
            x[0] = "0" + str(x[0])
        else:
            x[0] = str(x[0])
        x[0] = dateFormatConversion(x[0])

    pairsNoNull = []
    for x in dateScorePairs:
        if x[1]!="--":
            pairsNoNull += [x]
    pairsNoNull.sort(key=lambda x:x[0])

    x = np.array([x[0] for x in pairsNoNull])
    y = np.array([int(x[1]) for x in pairsNoNull])

    plt.plot(x,y)
    plt.show()

    kernel = gaussian_kde(y)

    pairs = []
    for x in range(0,100):
        pairs += [[x,(kernel.integrate_box_1d(0,x))]]

    newX = []
    newY = []
    for x in pairs:
        newX += [x[0]]
        newY += [x[1]]

    plt.plot(newX,newY)
    plt.show()

if __name__ == "__main__":
    main()

