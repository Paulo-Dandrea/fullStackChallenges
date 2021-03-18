string_numbers = input("Digite números separados por virgulas: ")
numbers_list = string_numbers.split(",")

total = 0

for number in numbers_list:
    number = number.strip()
    if not number.isdigit():
        print(f"Erro ao somar os valores. {number} não é um número válido")
        break

    else:
        total += int(number)

print(total)
