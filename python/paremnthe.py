# @param A : string
# @return an integer
def longestValidParentheses(A):
    temp = 0
    max_1 = 0
    stack = []
    for index in range(len(A)):
        char = A[index]
        if char == '(':
            stack.append(char)
        else:
            if (len(stack) > 0) and (stack[-1] == '('):
                stack.pop()
                temp = temp + 2
                if(temp > max_1):
                    max_1 = temp
            else:
                stack.clear() 
                temp = 0
        
        

    return max_1

# # @param A : string
# # @return an integer
# def longestValidParentheses(A):
#     temp = 0
#     maxans = 0
#     stack = [-1]
#     for index in range(len(A)):
#         char = A[index]
#         if char == '(':
#             stack.append(index)
#         else:
#             stack.pop();
#             if (len(stack) == 0):
#                 stack.append(index);
#             else:
#                 maxans = max(maxans, index - stack[-1])
            
        
        

#     return maxans


# @param A : string
# # @return an integer
# def longestValidParentheses(A):
#     temp = 0
#     max_num = 0
#     stack = [-1]
#     for index in range(len(A)):
#         char = A[index]
#         if char == '(':
#             stack.append(index)
#         else:
#             if len(stack) > 0 and A[stack[len(stack) - 1]] == '(':
#                 stack.pop()
#             else:
#                 max_num = max(index - stack[len(stack) - 1],  max_num)
#     print(stack)
        
        

#     return max_num

a = ")()))(())((())))))())()(((((())())((()())(())((((())))())((()()))(()(((()()(()((()()))(())()))((("
print(longestValidParentheses(a))