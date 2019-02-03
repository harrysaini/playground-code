# Write your unique_values function here:
def unique_values(my_dictionary):
    unique_vals = {}
    for val in my_dictionary.values():
        if(not val in unique_vals ):
            unique_vals[val] = 1
    return len(unique_vals.keys())
# Uncomment these function calls to test your  function:
print(unique_values({0:3, 1:1, 4:1, 5:3}))
# should print 2
print(unique_values({0:3, 1:3, 4:3, 5:3}))
# should print 1