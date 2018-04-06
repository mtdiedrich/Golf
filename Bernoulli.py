import math

def nCr(n,r):
    """
    Basic n choose r function
    n!/(r!(n-r)!)
    :param n: Selection pool
    :param r: Number of selections
    :return: Number of combinations
    """
    if n<r:
        return 0

    return math.factorial(n)/(math.factorial(r) * math.factorial(n-r))


def main():
    p = .8
    n = 1001
    r = 801
    sum = 0
    for x in range(r,n+1):
        sum += nCr(n,x) * (p**x) * ((1-p)**(n-x))
    print(sum)


if __name__ == "__main__":
    main()