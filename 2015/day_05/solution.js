{/* Day 5 - 2021 */}

const fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    //.map(strings => strings.split('').map(String))

{/* Used https://regex101.com/ to test my expressions */}

{/* part 1 */}
function getNiceStrings(strings) {
    /* The Non-Regex Way
    let countNice = 0
    let disallowedStrings = ['ab', 'cd', 'pq', 'xy']
    strings.map(string => {
        let conditionOne = string.filter(letter => ['a','e','i','o','u'].includes(letter)).length >= 3
        // = string.match(/[aeiou].*[aeiou].*[aeiou]/)
        let conditionTwo = string.filter(letter => {
            let isNice = false
            if (string.join('').includes(letter + letter)) { isNice = true }
            return isNice
        }).length > 0
        let conditionThree = !(disallowedStrings.filter(x => string.join('').includes(x)).length > 0)
        if (conditionOne && conditionTwo && conditionThree) { countNice++ }
    })
    */
    return strings.filter(string => {
        return string.match(/[aeiou].*[aeiou].*[aeiou]/)
    }).filter(string => {
        return string.match(/(\w)\1/)
    }).filter(string => {
        return !string.match(/ab|cd|pq|xy/)
    }).length
}
console.log('Day 5 - part 1: ' + getNiceStrings(input))

{/* part 2 */}
function getNiceStrings_2(strings) {
    return strings.filter(string => {
            return string.match(/(\w\w).*\1/)
        }).filter( string => {
            return string.match(/(\w)\w\1/)
        }).length
}
console.log('Day 5 - part 1: ' + getNiceStrings_2(input))
