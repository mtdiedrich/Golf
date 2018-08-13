import time
import LogisticRegressionModel

def main():
    logreg = LogisticRegressionModel.Model(r'C:\Users\Mitch\Projects\Golf\Data\Lines.csv')
    evals = logreg.evaluate()
    for x in evals:
        print(x)
        

if __name__=='__main__':
    start = time.time()
    main()
    end = time.time()
    print('Runtime: ' + str(round(end-start,2)) + ' seconds')
