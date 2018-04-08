def main():

    odds            = 10.0
    probability     = .11
    betSize         = .0

    expectedValue = (probability * odds - 1) * betSize
    expectedGrowth = ((1 + (odds - 1) * betSize) ** probability) * (1 - betSize) ** (1 - probability) - 1

    edge = odds * probability - 1
    kelly = edge/(odds-1)

    print(expectedValue)
    print(expectedGrowth)
    print(kelly)

if __name__=="__main__":
    main()