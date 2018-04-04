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

    return golfer


def main():

    golfer1 = openFile('DustinJohnsonProbabilities.csv')
    golfer2 = openFile('JustinThomasProbabilities.csv')
    golfer3 = openFile('JordanSpiethProbabilities.csv')
    golfers = [golfer1, golfer2, golfer3]

    sum  = 0
    for x in range(0,len(golfer1)):
        for y in range(0,len(golfer2)):
            for z in range(0, min(x,y)):
                sum += float(golfer1[x][2]) * float(golfer2[y][2]) * float(golfer3[z][2])
                print(sum)
    print(sum)

    sum2beats1 = 0
    for x in range(0,len(golfer1)):
        for y in range(0,x):
            sum2beats1 += float(golfer1[x][2]) * float(golfer2[y][2])
    print(sum2beats1-1)

    sum1beats2 = 0
    for x in range(0,len(golfer2)):
        for y in range(0,x):
            sum1beats2 += float(golfer2[x][2]) * float(golfer1[y][2])
    print(sum1beats2-1)

    sumTie = 0
    for x in range(0,len(golfer1)):
        sumTie += float(golfer1[x][2]) * float(golfer2[x][2])
    print(sumTie-1)
    
    print(sum2beats1 + sum1beats2 + sumTie - 3)

if __name__ == "__main__":
    main()
