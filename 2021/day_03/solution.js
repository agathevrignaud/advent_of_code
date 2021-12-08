{/* Day 3 - 2021 */}

const fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

{/* part 1 */}
function calculateConsumption(input) {
    let gamma = ""
    let epsilon = ""
    let one, zero
    for (let i=0; i < input[0].length;i++) {
        one = 0
        zero = 0
        input.map(bit => {
            if (bit.charAt(i) == '1') one += 1
            if (bit.charAt(i) == '0') zero += 1
        })
        if (one > zero) {
            gamma += "1"
            epsilon += "0"
        }
        else {
            gamma += "0"
            epsilon += "1"
        }
    }
    return parseInt(gamma, 2)*parseInt(epsilon, 2)
}
console.log('Day 3 - part 1: ' + calculateConsumption(input))

{/* part 2 */}
function assistance(input, isO2) {
    for (let i = 0; i < input[0].length; i++) {
        let one = 0
        let zero = 0
        if (input.length != 1) {
            input.map(bit => {
                bit.charAt(i) == '1' ? one += 1 : zero += 1
            })
            if (one >= zero) {
                input = input.filter(bit => bit.charAt(i) == (isO2 ? "1" : "0"))
            }
            if (one < zero) {
                input = input.filter(bit => bit.charAt(i) == (isO2 ? "0" : "1"))
            }
        }
    }
    return  parseInt(input[0],2)
}

function calculateLifeSupport(input) {
    return assistance(input, true)*assistance(input, false)
}

console.log('Day 3 - part 2: ' + calculateLifeSupport(input))