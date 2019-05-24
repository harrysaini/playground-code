import math 

def getDigits(num):
    digits = []
    while(num > 0):
        digits.append(num%10)
        num = math.floor(num/10)
    
    digits.reverse()
    return digits

def getNumber(arr):
    num = 0
    for elem in arr:
        num = num*10 + elem
    return num


def isKapler(num):
    square = pow(num, 2);
    digits = getDigits(num)
    print(digits)
    sq_digits = getDigits(square)
    print(sq_digits)
    len_digits = len(digits)
    print(len_digits)
    right = []
    left = []
    if 2*len(digits) == len(sq_digits):
        for i in range(0, len(digits)):
            left.append(sq_digits[i])
        for i in range(len(left), len(sq_digits)):
            right.append(sq_digits[i])
    else:
        for i in range(0, len(digits) - 1):
            left.append(sq_digits[i])
        for i in range(len(left), len(sq_digits)):
            right.append(sq_digits[i])
    
    print(left, right)
    leftNum = getNumber(left)
    rightNum = getNumber(right)
    print(leftNum, rightNum)
    if leftNum + rightNum == num:
        return True
    else:
        return False


print(isKapler(9))