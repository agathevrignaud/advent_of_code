### Day 2 - 2024 ###

reports = []

# Open the file
with open("input.txt", "r") as file:
    for line in file:
        report = list(map(int, line.strip().split()))
        reports.append(report)

## part one
def isIncreasingOrDecreasing(arr):
    return all(arr[i] < arr[i + 1] for i in range(len(arr) - 1)) or all(arr[i] > arr[i + 1] for i in range(len(arr) - 1))
def isDifferent(arr):
    return all(1 <= abs(arr[i] - arr[i + 1]) <= 3 for i in range(len(arr) - 1)) 

def countSafeReports(R):
    safeReports = 0
    for r in R:
        #The levels are either all increasing or all decreasing.
        # Any two adjacent levels differ by at least one and at most three.
        if (isIncreasingOrDecreasing(r) & isDifferent(r)):
            safeReports += 1
    return safeReports

print('Day 2 - part 1: ', str(countSafeReports(reports)))


## part two
def countSafeReports2(R):
    safeReports = 0
    for r in R:
        #The levels are either all increasing or all decreasing.
        # Any two adjacent levels differ by at least one and at most three.
        if (isIncreasingOrDecreasing(r) & isDifferent(r)):
            safeReports += 1
        else:
            for i in range(len(r)):
                new_arr = r[:i] + r[i+1:]
                if (isIncreasingOrDecreasing(new_arr) & isDifferent(new_arr)):
                    safeReports += 1
                    break
    return safeReports

print('Day 2 - part 2: ', str(countSafeReports2(reports)))