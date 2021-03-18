def is_anagram(test, original):
    if len(test) != len(original):
        return False

    original = original.lower()
    test = test.lower()

    lookup = {}

    for letter in original:
        if letter not in lookup:
            lookup[letter] = 1
        else:
            lookup[letter] += 1

    for letter_test in test:
        if letter_test not in lookup:
            return False
        if lookup[letter_test] <= 0:
            return False
        if lookup[letter_test] > 0:
            lookup[letter_test] -= 1

    return True

# Melhor solução, vi no codeWars:
# a Class Counter faz exatamente o que eu fiz
# from collections import Counter

# def is_anagram(test, original):
#     test, original = test.lower(), original.lower()
#     return Counter(test) == Counter(original)