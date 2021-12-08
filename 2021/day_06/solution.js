{/* Day 6 - 2021 */}

const fs = require("fs")
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(',')
    .map(Number)

{/* part 1 & 2 */}
let lanternfish = Array(9).fill(0)
input.forEach(fish => {
    lanternfish[fish] += 1
})

function countTheLanternfish(days) {
    let t = [...lanternfish]
    for (; days > 0; days--) {
        const newFish = t.shift()
        t.push(newFish)
        t[6] += newFish
    }
    return t.reduce((a, x) => a + x)
}
console.log('Day 6 - part 1: ' + countTheLanternfish(80))
console.log('Day 6 - part 2: ' + countTheLanternfish(256))