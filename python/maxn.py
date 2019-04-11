class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return a list of integers
    def solve(self, A, B):
        A.sort()
        B.sort()
        n = len(A)
        i = len(A) - 1
        j = len(A) - 1
        nptr = len(A) - 1
        result = []
        
        while(n > 0):
            if i >= 0 and j > 0 :
                next = A[nptr] + B[j-1]
                if A[i] + B[j] >= next:
                    result.append(A[i] + B[j])
                    i = i - 1;
                else:
                    result.append(next)
                    nptr = nptr - 1
                    j = j - 1;
                n = n - 1;
                    
        
        return result;
            

A = [ 3, 2, 4, 2 ]
B = [ 4, 3, 1, 2 ]
s = Solution()
print(s.solve(A, B))