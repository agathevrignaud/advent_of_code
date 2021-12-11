{/* Day 10 - 2021 */}

{/* Side Notes : chunks can contain 0 or more chunks, had not understood that at first */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .trim()
    .split(/\r?\n/)

{/* Stack-Based algorithm ref : see picture attached or https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/ */}

{/* part 1 */}
function getCorruptedScore(){
    const matchingChar = {'(': ')', '[': ']', '{': '}', '<': '>'}
    const illegalPoints = {')': 3, ']': 57, '}': 1197, '>': 25137}
    let finalScore = 0
    for (let lines of input) {
        let stack = []
        for (let char of lines) {
            if (['(', '[', '{', '<'].indexOf(char) >= 0) {
                stack.push(matchingChar[char])
            } else {
                if (stack.pop() != char) {
                    finalScore += illegalPoints[char]
                    break;
                }
            }
        }
    }
    return finalScore
}
console.log('Day 10 - part 1: ' + getCorruptedScore())

{/* part 2 */}

// found on 30secs of code (https://bit.ly/2neWfJ2)
const median = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function getIncompleteScore(){
    const matchingChar = {'(': ')', '[': ']', '{': '}', '<': '>'}
    const illegalPoints = {')': 1, ']': 2, '}': 3, '>': 4}
    let incompleteScores = []
    for (let lines of input) {
        let stack = []
        let isCorrupted = false
        for (let char of lines) {
            if (['(', '[', '{', '<'].indexOf(char) >= 0) {
                stack.push(matchingChar[char])
            } else {
                if (stack.pop() != char) {
                    isCorrupted = true
                    break;
                }
            }
        }
        if (!isCorrupted && stack.length > 0) { // all opened are closed or still open & not mismatched (corrupted)
            let score = 0
            stack.reverse() // influences score, let's not forget that again :p
            for (let i=0;i<stack.length;i++) {
                score = score * 5 + illegalPoints[stack[i]]
            }
            incompleteScores.push(score)
        }
    }
    return median(incompleteScores)
}
console.log('Day 10 - part 2: ' + getIncompleteScore())

