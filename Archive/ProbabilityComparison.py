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
    # DO NOT FORGET: Low score wins :)
    golfer1 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Probabilities\DocRedmanProbabilities.csv')
    golfer2 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Probabilities\JustinThomasProbabilities.csv')

    sum2 = 0
    for x in range(0,len(golfer1)):
        for y in range(0,x):
            sum2 += float(golfer1[x][2]) * float(golfer2[y][2])
    sum2 = sum2 - 1
    print(sum2)

    golfer2 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Probabilities\PaulCaseyProbabilities.csv')
    golfer1 = openFile(r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Probabilities\HidekiMatsuyamaProbabilities.csv')

    sum1 = 0
    for x in range(0,len(golfer1)):
        for y in range(0,x):
            sum1 += float(golfer1[x][2]) * float(golfer2[y][2])
    sum1 = sum1 - 1
    print(sum1)

    tieSum = 0
    for x in range(0,len(golfer1)):
        tieSum += float(golfer1[x][2]) * float(golfer2[x][2])
    print(tieSum-1)



if __name__ == "__main__":
    main()
