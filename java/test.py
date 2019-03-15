#!/bin/python3

import math
import os
import random
import re
import sys

day_prog = 256

def getDaysInMonth(year, isJulian):
    isLeap = year%4==0 if isJulian else (year%400 == 0) or (year%4 == 0 and not year%100 == 0)
    return [
        31,
        28 if not isLeap else 29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]

def getDateAndMonth(daysInMonth):
    daysPassed = 0
    month = 0
    for days in daysInMonth:
        month += 1
        daysPassed += days
        if(day_prog - daysPassed <= daysInMonth[month+1]):
            break

    month = month+1
    date = day_prog - daysPassed

    return date , month

def getDateAndMonthInYear(year, isJulian):
    daysInMonth = getDaysInMonth(year, isJulian)
    return getDateAndMonth(daysInMonth)


def twoDigit(num):
    if(num< 10):
        return '0'+str(num)
    else:
        return str(num)


def getDateAndMonthIn1918():
    daysInMonth = getDaysInMonth(year, False)
    daysInMonth[1] = 15
    date, month = getDateAndMonth(daysInMonth)
    print(date)
    date = date + 13
    return date, month


# Complete the dayOfProgrammer function below.
def dayOfProgrammer(year):
    date = None
    month = None

    if year < 1918:
        date, month = getDateAndMonthInYear(year, True)
    elif year == 1918:
        date, month = getDateAndMonthIn1918()
    else:
        date, month = getDateAndMonthInYear(year, False)

    return twoDigit(date)+"."+twoDigit(month)+'.'+str(year)

if __name__ == '__main__':
    
    year = int(input().strip())

    result = dayOfProgrammer(year)

    print(result)
