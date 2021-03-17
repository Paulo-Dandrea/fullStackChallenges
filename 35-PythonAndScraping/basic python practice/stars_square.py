def stars_square(sizeNumber):
    index = 0
    while index < sizeNumber:
        jindex = 0

        while jindex < sizeNumber:
            print("*", end="")
            jindex += 1

        print("*")
        index += 1


stars_square(5)
stars_square(10)
stars_square(25)

# versão do gabarito


def draw_square(n):
    for row in range(1, n + 1):
        for column in range(1, n + 1):
            print("*", end="")
        print()
