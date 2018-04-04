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
    file1 = 'DustinJohnsonProbabilities.csv'
    file2 = 'JordanSpiethProbabilities.csv'
    golfer1 = openFile(file1)
    golfer2 = openFile(file2)
    sum = 0
    for x in range(0,len(golfer1)):
        sum += float(golfer1[x][2]) * float(golfer2[x-1][3])
    print(sum)


if __name__ == "__main__":
    main()
