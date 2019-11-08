class Solution:

    def spiralRecursive(self, A, startRow, startCol,  endRow, endCol, list_ans):

        if (endRow < startRow) or (endCol < startCol):
            return

        # print first row
        for col in range(startCol, endCol + 1):
            list_ans.append(A[startRow][col])

        # print last column
        for row in range(startRow + 1, endRow + 1):
            list_ans.append(A[row][endCol])

        if endCol >= 1 and startRow < endRow:
            # print last row
            for col in range(endCol - 1, startCol - 1, -1):
                list_ans.append(A[endRow][col])

        # print first column
        if (endRow > 1) and startCol < endCol:
            for row in range(endRow - 1, startRow, -1):
                list_ans.append(A[row][startCol])

        self.spiralRecursive(A, startRow + 1, startCol + 1,
                             endRow - 1, endCol - 1, list_ans)

    # @param A : tuple of list of integers
    # @return a list of integers
    def spiralOrder(self, A):
        rows = len(A)
        cols = len(A[0])
        list_ans = []
        self.spiralRecursive(A, 0, 0, rows - 1, cols - 1,  list_ans)
        return list_ans


sol = Solution()
l = [
    [1, 2 ,3]
]
print(sol.spiralOrder(l))
