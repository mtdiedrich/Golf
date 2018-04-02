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

    golfer = openFile('JordanSpieth.csv')
    scores = np.asarray(createArrayFromSpecifiedIndices(golfer, [3,4,5,6,7]))
    purgedGolfer = dataPurge(scores)
    kernel = gaussian_kde(purgedGolfer)

    keys = []
    probs = {}
    for i in range(216,360):
        if i not in keys:
            keys += [i]
            probs[i] = 0
        for w in range(54,90):
            for x in range(54,90):
                for y in range(54,90):
                    for z in range(54,90):
                        if (w+x+y+z)==i:
                            probs[i] += kernel.evaluate(w) * kernel.evaluate(x) * kernel.evaluate(y) * kernel.evaluate(z)
        print(i)
    probabilities = []
    for x in keys:
        probabilities += [[x, probs[x]]]
    df = pd.DataFrame(probabilities)
    df.to_csv("JordanSpiethProbabilities.csv")
    """
    TODO: 
    Apply other data to problem
    """

if __name__ == "__main__":
    main()