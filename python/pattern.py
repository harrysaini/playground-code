
def findPattern(pattern, index, num_list, map_dict):

    if(index >= (len(pattern))):
            return True

    current = num_list[-1]
    
    if(pattern[index] == 'M'):
        for i in range(1, 10):
            if(i < current and (not map_dict.get(i, False))):
                num_list.append(i)
                map_dict[i] = True
                if(not findPattern(pattern, index + 1, num_list, map_dict)):
                    num_list.pop()
                    map_dict[i] = False
                else:
                    return True
        
        return False
    elif(pattern[index] == 'N'):
        for i in range(1, 10):
            if(i > current and (not map_dict.get(i, False))):
                num_list.append(i)
                map_dict[i] = True
                if(not findPattern(pattern, index + 1, num_list, map_dict)):
                    num_list.pop()
                    map_dict[i] = False
                else:
                    return True
                
        return False



# Complete the function below
def findPossibleSmallestNumberMatchingPattern(pattern):
   
    results = []
    for i in range(1, 10):
        num_list = []
        map_dict = {}
        num_list.append(i)
        map_dict[i] = True;
        val = findPattern(pattern, 0, num_list, map_dict)
        if(val == True):
            return ''.join(map(str, num_list))

    
       



print(findPossibleSmallestNumberMatchingPattern('M'))