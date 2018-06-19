from scipy.stats import gaussian_kde
import numpy as np
import csv

def kernelProbabilityMassFunction(data):

    kernel = gaussian_kde(data)

    probabilities = {}
    for x in range(0,100):
        probabilities[x] = kernel.integrate_box_1d(0,x) - kernel.integrate_box_1d(0,x-1)

    return probabilities

def kernelCumulativeMassFunction(data):

    kernel = gaussian_kde(data)

    probabilities = {}
    sum = 0
    for x in range(0,100):
        sum += kernel.integrate_box_1d(0, x) - kernel.integrate_box_1d(0, x - 1)
        probabilities[x] = sum

    return probabilities

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

def createList(target):

    returnable = []
    for x in target:
        for y in [3,4,5,6,7]:
            returnable += [x[y]]

    purged = []
    for x in returnable:
        if x != "--":
            purged += [int(x)]

    return purged

