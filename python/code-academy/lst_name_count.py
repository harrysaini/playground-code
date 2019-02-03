# Write your count_first_letter function here:
def count_first_letter(names_list):
    first_letter_count_map = {}
    for key in names_list:
        if(not key[:1] in first_letter_count_map):
            first_letter_count_map[key[:1]] = len(names_list[key])
        else:
            first_letter_count_map[key[:1]] += len(names_list[key])
    
    return first_letter_count_map


# Uncomment these function calls to test your  function:
print(count_first_letter({"Stark": ["Ned", "Robb", "Sansa"], "Snow" : ["Jon"], "Lannister": ["Jaime", "Cersei", "Tywin"]}))
# should print {"S": 4, "L": 3}
print(count_first_letter({"Stark": ["Ned", "Robb", "Sansa"], "Snow" : ["Jon"], "Sannister": ["Jaime", "Cersei", "Tywin"]}))
# should print {"S": 7}