### Day 3 - 2024 ###
import re

instructions    = []

# Open the file
with open("input.txt", "r") as file:
    instructions = file.read()

## part one
def uncorrupt(ins):
    pattern  = r"mul\((\d{1,3}),(\d{1,3})\)"
    mul = 0
    pairs = re.findall(pattern, ins)
    for num1, num2 in pairs:
        mul += int(num1) * int(num2)
    return mul

print('Day 3 - part 1: ', uncorrupt(instructions))


## part two
def uncorrupt2(ins):
    pattern = r"do\(\)|don\'t\(\)|mul\((\d{1,3}),(\d{1,3})\)"
    mul = 0
    do_sum = True
    for pair in re.finditer(pattern, ins):
        # in which 0, 1, 2 = dont/do, num1, num2
        match pair[0]:
            case 'do()':
                do_sum = True
            case 'don\'t()':
                do_sum = False
            case _:
                if do_sum:
                    mul += int(pair[1]) * int(pair[2])
    return mul
print('Day 3 - part 2: ', uncorrupt2(instructions))