{/* Day 14 - 2021 */}

const _ = require("lodash");
const fs = require("fs")

let polymer = 'HHKONSOSONSVOFCSCNBC'
let rules = new Map()
fs.readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(line => {
         rules.set(line.split(" -> ")[0], line.split(" -> ")[1])
    })

{/* part 1 & 2 */}
function polymerization(steps) {
    let pairs = new Map()
    for (let i=0; i<polymer.length-1; i++){
        let pair = polymer[i]+polymer[i+1]
        pairs.set(pair,(pairs.get(pair)||0)+1)
    }
    let letterCount =  _.countBy(polymer)
    for (let i = 1; i <= steps; i++) {
        let new_pairs = new Map();
        for (let [pair, q] of pairs) {
            const letter = rules.get(pair);
            new_pairs.set(pair[0] + letter,  q + (new_pairs.get(pair[0] + letter) || 0));
            new_pairs.set(letter  + pair[1], q + (new_pairs.get(letter  + pair[1]) || 0));
            letterCount[letter] = (letterCount[letter] || 0) +q
        }
        pairs = new_pairs;
    }
    let results = Object.values(letterCount).sort((a, b) => a - b)
    return (results[results.length-1]-results[0])
}
console.log('Day 14 - part 1: ' + polymerization(10))
console.log('Day 14 - part 2: ' + polymerization(40))