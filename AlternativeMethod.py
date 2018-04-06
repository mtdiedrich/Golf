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

def writeFile(data, file):
    """
    Writes file of probabilities
    :param scores: Scores that are keys in probability dictionary
    :param probabilities: Dict of probabilities
    :param file: file name
    :return: void
    """
    with open(file, 'wb') as csvfile:
        for x in data:
            spamwriter = csv.writer(csvfile, delimiter=' ',quotechar='|', quoting=csv.QUOTE_MINIMAL)
            spamwriter.writerow(x[0],x[1])
            print(x[0],x[1])

def main():

    golfer = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\PhilMickelson.csv')
    golfer2 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\MattKuchar.csv')
    golfer3 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\RickieFowler.csv')
    scores = np.asarray(createArrayFromSpecifiedIndices(golfer, [3,4,5,6,7]))
    scores2 = np.asarray(createArrayFromSpecifiedIndices(golfer2, [3, 4, 5, 6, 7]))
    scores3 = np.asarray(createArrayFromSpecifiedIndices(golfer3, [3, 4, 5, 6, 7]))
    purgedGolfer = dataPurge(scores)
    purgedGolfer2 = dataPurge(scores2)
    purgedGolfer3 = dataPurge(scores3)
    kernel = gaussian_kde(purgedGolfer)
    kernel2 = gaussian_kde(purgedGolfer2)
    kernel3 = gaussian_kde(purgedGolfer3)

    sum = 0
    for x in range(54,90):
        for y in range(54,90):
            for z in range(54,min(x,y)):
                sum += kernel.evaluate(x) * kernel3.evaluate(y) * kernel2.evaluate(z)
    print(float(sum))



if __name__ == "__main__":
    main()
