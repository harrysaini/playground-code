
def nextSmallest(elem, map_dict, num_list):
    next_elem = -5
    for i in range(1, 9):
        if((not i in num_list) and (i < elem )):
            next_elem = i
            break
    
    return next_elem


def nextLargest(elem, map_dict, num_list):
    next_elem = -5
    for i in range(1, 9):
        if((not map_dict.get(i, False)) and (elem < i)):
            next_elem = i
            break
    
    return next_elem




def findPattern(pattern, index, num_list, map_dict, isNextLoop = False, nextElem = -5):

    if isNextLoop:
        if(index >= (len(pattern))):
            return True


        current = num_list[-1]
        if(pattern[index] == 'M'):
            next_elem = nextSmallest(current, map_dict, num_list)
            if(next_elem == -5):
                return False
            else: 
                num_list.append(next_elem)
                map_dict[next_elem] = True
                if(not findPattern(pattern, index + 1, num_list, map_dict, True)) :
                    num_list.pop()
                    map_dict[next_elem] = False
                    res =  findPattern(pattern, index, num_list, map_dict, True)
                    return res

                else:
                    return True

        elif (pattern[index] == 'N'):
            next_elem = nextLargest(current, map_dict, num_list)
            if(next_elem == -5):
                return False
            else: 
                num_list.append(next_elem)
                map_dict[next_elem] = True
                if(not findPattern(pattern, index , num_list, map_dict, True)) :
                    num_list.pop()
                    map_dict[next_elem] = False
                    res =  findPattern(pattern, index, num_list, map_dict, True, next_elem)
                    return res
                else:
                    return True
        else:
             return -1

    else: 
        for i in range(1, 10):
            if(not map_dict.get(i, False)):
                num_list.append(i)
                map_dict[i] = True
                res = findPattern(pattern, index, num_list, map_dict, True)
                if( res == False):
                    num_list.pop()
                    map_dict[i] = False
                elif(res == -1):
                    return -1

            
                   
                

# Complete the function below.
def findPossibleSmallestNumberMatchingPattern(pattern):
    num_list = []
    map_dict = {}

    val = findPattern(pattern, 0, num_list, map_dict)

    if(val == -1):
        return -1
    else:
        return num_list
       # return ''.join(map(str, num_list))



print(findPossibleSmallestNumberMatchingPattern('MMM'))
