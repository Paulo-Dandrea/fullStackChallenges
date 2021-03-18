def bigger_name_in_list(list):
    bigger_name = ""
    for name in list:
        if len(name) > len(bigger_name):
            bigger_name = name
    print(bigger_name)


list = ["José", "Lucas", "Nádia", "Fernanda", "Cairossssssss", "Joana"]

bigger_name_in_list(list)
