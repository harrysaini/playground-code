
# @param A : list of integers
# @return an integer
def largestRectangleArea(A):
    map = {}
    prevMap = {}
    max = -float('inf')
    for current in range(len(A)):
        height = A[current]
        map = {}
        for j in range(1, height+1):
            prev = current - 1
            if(prev >= 0):
                if(prevMap.get(j)):
                    map[j] = prevMap[j] + j
                else:
                    map[j] = j
            else:
                map[j] = j
            if(map[j] >= max):
                max = map[j]
            
            print(map)
        prevMap = map


    print(map)
    print(max)


    



largestRectangleArea([2,1,5,6,2,3])