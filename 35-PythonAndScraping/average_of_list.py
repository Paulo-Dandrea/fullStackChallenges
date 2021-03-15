def average_of_list(list):
    total = 0
    for number in list:
        total += number
    return total / len(list)


list = [1, 2, 3, 4, 5, 6, 7]

print(average_of_list(list))
