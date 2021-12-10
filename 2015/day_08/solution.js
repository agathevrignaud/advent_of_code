{/* Day 8 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

console.log(input)

{/* part 1 */}
function getStringDifferences(strings){
    let charCode, charMemory, newlyEncoded
    charCode = charMemory = newlyEncoded = 0
    strings.map(string => {
        charMemory += eval(string).length
        charCode += string.length
        newlyEncoded += string.replace(/\\/g, '\\\\').replace(/\"/g, '\\"').length+2
    })
    //newlyEncoded-charCode
    return charCode - charMemory
}
console.log('Day 8 - part 1: ' + getStringDifferences(input))



{/* part 2 */}
function getStringDifferences_2(strings){
    let charCode, newlyEncoded
    charCode  = newlyEncoded = 0
    strings.map(string => {
        charCode += string.length
        newlyEncoded += string.replace(/\\/g, '\\\\').replace(/\"/g, '\\"').length+2
    })
    return newlyEncoded-charCode
}
console.log('Day 8 - part 2: ' + getStringDifferences_2(input))