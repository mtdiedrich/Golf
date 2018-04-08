from scipy.stats import gaussian_kde

def kernelProbabilityMassFunction(data):
    kernel = gaussian_kde(data)
    for x in range(0, len(data)):
        print(data)