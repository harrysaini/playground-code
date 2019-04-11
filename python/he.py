class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return a list of integers
    def order(self, A, B):
        result = [None]*len(A)
        forward_small = []
        pos_map = {}
        
        for i in range(len(A)):
            forward_small.append(i)
            pos_map[A[i]] = B[i]
        
        A.sort()
        for elem in A:
            pos = forward_small.index(pos_map[elem])
            result[pos] = elem;
            for i in range(pos, len(A)):
                forward_small[i] = forward_small[i] - 1

        return result

A = [ 86, 77 ]
B = [ 0, 1 ]
s = Solution()
print(s.order(A, B))