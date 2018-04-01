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
    npGolfer = npGolfer[1:]

    return npGolfer

def createArrayFromSpecifiedIndices(target, listOfIndices):
    """
    From a 2D array, return a 1D array of the given elements
    :param target: A 2D array
    :param listOfIndices: A list of elements
    :return: A list of elements from every item in the list
    """
    returnable = []
    for x in target:
        for y in listOfIndices:
            returnable += [x[y]]

    return returnable

def dataPurge(data):
    purged = []
    for x in data:
        if x != "--":
            purged += [int(x)]

    return purged

def main():

    golfer = openFile('DustinJohnson.csv')
    scores = np.asarray(createArrayFromSpecifiedIndices(golfer, [3,4,5,6,7]))
    purged = dataPurge(scores)
    for x in range(0,len(purged)%4):
        del purged[len(purged)-x-1]
    fours = []
    index = int(len(purged)/4)
    for x in range(0,index):
        fours += [purged[4 * x] + purged[4 * x + 1] + purged[4 * x + 2] + purged[4 * x + 3]]

    kernel = gaussian_kde(fours)

    for x in range(216,360):
        print(x, kernel.integrate_box_1d(0, x))



if __name__ == "__main__":
    main()