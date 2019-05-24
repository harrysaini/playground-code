#!/bin/python3

import math
import os
import random
import re
import sys

def binarySearch(arr, left, right, elem):
    if(right < 0 ):
        return -1
    if left >= len(arr):
        return len(arr)
        
    mid = round((left + right) / 2);
    if arr[mid] >= elem and (mid + 1) < len(arr) and arr[mid+1] <= elem :
        return mid;
    else:
        if elem < arr[mid] :
            return binarySearch(arr, mid + 1, right, elem)
        else:
            return binarySearch(arr, left, mid - 1, elem)

# Complete the climbingLeaderboard function below.
def climbingLeaderboard(scores, alice):
    ranks = {}
    ranks[scores[0]] = 1
    results = []
    for index in range(1, len(scores)):
        if(not scores[index] == scores[index - 1]):
            ranks[scores[index]] = ranks[scores[index-1]] + 1
    print(ranks)
    for alice_score in alice:
        index = binarySearch(scores, 0 , len(scores) - 1, alice_score)
        print(index)
        if index == -1:
            results.append(1)
        elif index == len(scores):
            results.append(ranks[scores[-1]] + 1)
        else:
            if(alice_score == scores[index]):
                results.append(ranks[scores[index]])
            else :
                results.append(ranks[scores[index]] + 1)
    
    print(results)

if __name__ == '__main__':

    climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[5, 25, 50, 120])
    climbingLeaderboard([100, 90, 90, 80, 75, 60],[50, 65, 77, 90, 102])
