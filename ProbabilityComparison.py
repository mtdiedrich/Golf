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
    file = 'DustinJohnsonProbabilities.csv'
    golfer = openFile(file)
    for x in golfer:
        print(x)

if __name__ == "__main__":
    main()
