from scipy.stats import gaussian_kde
import pandas as pd
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
    """
    Given a list of numbers and empty entries (--), remove the empty entries and return the list
    :param data: list of numbers
    :return: list of numbers purged of (--)
    """
    purged = []
    for x in data:
        if x != "--":
            purged += [int(x)]

    return purged


def main():

    golfer = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\CharleyHoffman.csv')
    scores = np.asarray(createArrayFromSpecifiedIndices(golfer, [3, 4, 5, 6, 7]))
    purgedGolfer = dataPurge(scores)
    kernel = gaussian_kde(purgedGolfer)
    pmfSum = 0
    pdfSum = 0
    print("Score", "pmf Probability", "pdf Probability")
    for x in range(30,90):
        pmfSum += kernel.integrate_box_1d(0,x)-kernel.integrate_box_1d(0,x-1)
        pdfSum += float(kernel.evaluate(x))
        print(x, kernel.integrate_box_1d(0,x)-kernel.integrate_box_1d(0,x-1), float(kernel.evaluate(x)))
    print("   ", pmfSum, pdfSum)


if __name__ == "__main__":
    main()