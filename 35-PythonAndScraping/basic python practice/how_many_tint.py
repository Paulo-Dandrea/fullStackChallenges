import math


def how_many_tint(wall_size):
    liters_per_can = 18
    price_per_liter = 80.00
    square_meter_for_liter = 3

    liters_to_fill_wall = wall_size / square_meter_for_liter
    cans_to_fill_wall = math.ceil(liters_to_fill_wall / liters_per_can)
    total_price = cans_to_fill_wall * price_per_liter

    return (cans_to_fill_wall, total_price)


print(how_many_tint(300))

# versão do gabarito da trybe

def paint_costs(area):
    can_price = 80
    required_liters = area // 3
    required_cans = required_liters % 18
    return required_cans, required_cans * can_price