class Solution:
    
    def subArraySum(self, A, start, end):
        print('abc' , start , end)
        if start + 1 == end:
            return -float('inf')
        sum = 0
        for i in range(start + 1, end ):
            sum += A[i]
        return sum

    # @param A : list of integers
    # @return a list of integers
    def maxset(self, A):
        maxSum = -1
        index = 0
        end = 0
        start = 0
        answer = []
        negative_indexes = [-1]
        
        for i in range(len(A)):
            elem = A[i]
            if(elem < 0):
                negative_indexes.append(i)

        print(negative_indexes)
        negative_indexes.append(len(A))
        for i in range(len(negative_indexes) - 1):
            sum = self.subArraySum(A, negative_indexes[i], negative_indexes[i+1])
            print(sum)
            if(sum > maxSum):
                maxSum = sum
                answer = A[negative_indexes[i] + 1 :negative_indexes[i+1]]
                print('g', sum ,maxSum)
                print(answer)
            if(sum == maxSum):
                if(len(answer) < (negative_indexes[i+1] - negative_indexes[i])):
                    maxSum = sum
                    print('o', negative_indexes[i], negative_indexes[i+1])
                    answer = A[negative_indexes[i]+1:negative_indexes[i+1] ]
                    print(answer)
            
            
        return answer
        
        
                        
list = [
    [ -846930886, -1714636915, 424238335, -1649760492 ],
    [ 1, 2, 5, -7, 2, 5 ],
    [ 756898537, -1973594324, -2038664370, -184803526, 1424268980 ]

]
sol = Solution()
for lst in list:
    print(lst, '------------') 
    print(sol.maxset(lst))