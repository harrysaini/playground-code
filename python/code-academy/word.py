# Write your word_length_dictionary function here
def word_length_dictionary(words):
    word_length_map = {}
    for word in words:
        word_length_map[word] = len(word)

    return word_length_map
# Uncomment these function calls to test your  function:
print(word_length_dictionary(["apple", "dog", "cat"]))
# should print {"apple":5, "dog": 3, "cat":3}
print(word_length_dictionary(["a", ""]))
# should print {"a": 1, "": 0}