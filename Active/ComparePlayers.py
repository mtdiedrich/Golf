from Active import Utilities as ut
import numpy as np


def main():

    golfer1 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\JordanSpieth.csv')
    golfer1 = ut.createList(golfer1)

    golfer2 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\TonyFinau.csv')
    golfer2 = ut.createList(golfer2)

    golfer3 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\CharleyHoffman.csv')
    golfer3 = ut.createList(golfer3)

    golfer4 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\ZachJohnson.csv')
    golfer4 = ut.createList(golfer4)

    golfers = []
    golfers += [golfer1]
    golfers += [golfer2]
    golfers += [golfer3]
    golfers += [golfer4]

    x = np.asarray([ut.kernelProbabilityMassFunction(golfer1)[x] for x in ut.kernelProbabilityMassFunction(golfer1)])
    y = np.asarray([ut.kernelProbabilityMassFunction(golfer2)[x] for x in ut.kernelProbabilityMassFunction(golfer2)])

    z = np.dot(x[:, None], y[None])

    sum = 0
    for a in range(0,len(z)):
        for b in range(0,len(z[a])):
            print(a,b,z[a][b])


if __name__ == "__main__":
    main()