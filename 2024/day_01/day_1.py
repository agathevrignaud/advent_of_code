### Day 1 - 2024 ###


left_side    = []
right_side   = []

# Open the file + init arrays
with open("input.txt", "r") as file:
    for line in file:
        left, right = line.strip().split()
        left_side.append(int(left))
        right_side.append(int(right))

## part one
def calculateDistance(A, B):
    distance = 0
    A.sort()
    B.sort()
    for index, value in enumerate(A):
        distance += abs(A[index] - B[index])
    return distance

print('Day 1 - part 1: ' + str(calculateDistance(left_side, right_side)))


## part two
def calculateSimilarityScore(A, B):
    score = 0
    for nb in A:
        similarity = B.count(nb)
        score += nb * similarity
    return score
        

print('Day 1 - part 2: ' + str(calculateSimilarityScore(left_side, right_side)))