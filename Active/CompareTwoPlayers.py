import Utilities as ut

def main():

    golfer1 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\JordanSpieth.csv')
    golfer1 = ut.createList(golfer1)
    probability1 = ut.kernelProbabilityMassFunction(golfer1)
    cumulative1 = ut.kernelCumulativeMassFunction(golfer1)

    golfer2 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\DustinJohnson.csv')
    golfer2 = ut.createList(golfer2)
    probability2 = ut.kernelProbabilityMassFunction(golfer2)
    cumulative2 = ut.kernelCumulativeMassFunction(golfer2)

    sum1 = 0
    sum2 = 0
    sumT = 0
    for x in range(1,100):
        sum1 += (probability2[x] * cumulative1[x - 1])
        sum2 += (probability1[x] * cumulative2[x-1])
        sumT += (probability1[x] * probability2[x])

    print("Probability that golfer 1 scores less than golfer 2:   ", sum1)
    print("Probability that golfer 2 scores less than golfer 1:   ", sum2)
    print("Probability that golfers 1 and 2 have the same score:  ", sumT)
    print("Total Probability:                                     ", sum1+sum2+sumT)

if __name__ == "__main__":
    main()