{/* Day 1 - 2021 */}

const fs = require("fs");
const input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(Number);

{/* part 1 */}
function numberOfIncrease(input) {
    let counter = 0
    for (let i=1; i<input.length;i++) {
        if (input[i] > input[i-1]) {
            counter += 1
        }
    }
    return counter
}
console.log('Day 1 - part 1: ' + numberOfIncrease(input))

{/* part 2 */}
function numberOfIncrease_3(input) {
    let counter = 0
    let sum = 0
    let previousSum = Infinity
    for (let i=0; i<input.length;i++) {
        sum = input[i-1] + input[i] + input[i+1]
        if (sum > previousSum) {
            counter += 1
        }
        previousSum = sum
    }
    return counter
}
console.log('Day 1 - part 2: ' + numberOfIncrease_3(input))