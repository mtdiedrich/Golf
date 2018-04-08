from Active import Utilities as ut


def main():

    golfer1 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\JustinThomas.csv')
    golfer1 = ut.createList(golfer1)

    golfer2 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\DustinJohnson.csv')
    golfer2 = ut.createList(golfer2)

    golfer3 = ut.openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\CharleyHoffman.csv')
    golfer3 = ut.createList(golfer3)

    golfers = []
    golfers += [golfer1]
    golfers += [golfer2]
    golfers += [golfer3]

    tracker = []
    probabilies = {}
    for x in range(0,len(golfers)):
        for y in range(0,len(golfers)):
            if (sorted([x,y])) in tracker:
                continue
            if x == y:
                continue

            tracker += [sorted([x, y])]
            probability1 = ut.kernelProbabilityMassFunction(golfers[x])
            probability2 = ut.kernelProbabilityMassFunction(golfers[y])
            cumulative1 = ut.kernelCumulativeMassFunction(golfers[x])
            cumulative2 = ut.kernelCumulativeMassFunction(golfers[y])

            sum1 = 0
            sum2 = 0
            sumT = 0
            for z in range(1, 100):
                sum1 += (probability2[z] * cumulative1[z - 1])
                sum2 += (probability1[z] * cumulative2[z - 1])
                sumT += (probability1[z] * probability2[z])

            print(x, "beats", y, "=", sum1)
            print(y, "beats", x, "=", sum2)
            print(x, "and", y, "tie =", sumT)




if __name__ == "__main__":
    main()