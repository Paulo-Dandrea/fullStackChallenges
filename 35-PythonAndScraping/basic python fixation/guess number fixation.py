import random

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input("Qual é seu palpite? "))


print(f"o número sorteado era {random_number}")
