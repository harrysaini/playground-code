#!/bin/python3

import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
    strArray = s.split(':')
    lastSplit = strArray[2]
    
    if(lastSplit[-2:] == "AM"):
        return s[:-2]
    else:
        return str(int(strArray[0]) + 12) + s[2:-2]


if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result + '\n')

    f.close()
