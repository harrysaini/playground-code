# Write your max_key function here:
def max_key(my_dictionary):
    max_key = list(my_dictionary)[0]

    for key in my_dictionary:
        if(my_dictionary[key] > my_dictionary[max_key]):
            max_key = key
    
    return max_key
  
# Uncomment these function calls to test your  function:
print(max_key({1:100, 2:1, 3:4, 4:10}))
# should print 1
print(max_key({"a":100, "b":10, "c":1000}))
# should print "c"