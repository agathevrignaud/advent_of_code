{/* Day 5 - 2021 */}

const fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

input = input.map(set => set.split(' -> '))
input = input.map(sets => sets.map(set => set.split(',').map(Number)))

function min(a,b) { return (a+b-Math.abs(a-b)) / 2}
function max(a,b) { return (a+b+Math.abs(a-b)) / 2}

{/* part 1 */}
function getMarkedCells(sets) {
    let staticValue = 0
    let minValue = 0
    let maxValue = 0
    let markedCells = new Map()
    sets.map(set => {
        staticValue = (set[0][0] == set[1][0]) ? set[0][0] : set[1][1]
        minValue = (set[0][0] != set[1][0]) ? min(set[0][0],set[1][0]) : min(set[0][1], set[1][1])   // vertical
        maxValue = (set[1][1] != set[0][1]) ? max(set[1][1],set[0][1]) : max(set[0][0],set[1][0])   // horizontal
        for (let i=minValue;i<=maxValue;i++){
            if (set[0][0] == set[1][0]) {
                let key = `[${staticValue},${i}]`
                markedCells.has(key) ? markedCells.set(key, markedCells.get(key) +1) : markedCells.set(key, 1)
            } else {
                let key = `[${i},${staticValue}]`
                markedCells.has(key) ? markedCells.set(key, markedCells.get(key) +1) : markedCells.set(key, 1)
            }
        }
    })
    return [...markedCells.values()].filter(cell => cell >= 2).length
}
let setPartOne = input.filter(sets => (sets[0][0] == sets[1][0]) || (sets[0][1] == sets[1][1]))
console.log('Day 5 - part 1: ' + getMarkedCells(setPartOne))

{/* part 2 */}
function getMarkedCells_2(sets) {
    let staticValue = 0
    let minValue = 0
    let maxValue = 0
    let markedCells = new Map()
    let counter = 0
    sets.map(set => {
        if (set[0][0] == set[1][0] || set[0][1] == set[1][1]) {
            staticValue = (set[0][0] == set[1][0]) ? set[0][0] : set[1][1]
            minValue = (set[0][0] != set[1][0]) ? min(set[0][0],set[1][0]) : min(set[0][1], set[1][1])   // vertical
            maxValue = (set[1][1] != set[0][1]) ? max(set[1][1],set[0][1]) : max(set[0][0],set[1][0])   // horizontal
            for (let i=minValue;i<=maxValue;i++){
                if (set[0][0] == set[1][0]) {
                    let key = `[${staticValue},${i}]`
                    markedCells.has(key) ? markedCells.set(key, markedCells.get(key) +1) : markedCells.set(key, 1)
                }
                if (set[0][1] == set[1][1]) {
                    let key = `[${i},${staticValue}]`
                    markedCells.has(key) ? markedCells.set(key, markedCells.get(key) +1) : markedCells.set(key, 1)
                }
            }
        }

        if (Math.abs(set[0][0] - set[1][0]) == Math.abs(set[0][1] - set[1][1])) {
            counter++
            let x = set[0][0]
            let y = set[0][1]
            let deltaXY = Math.abs(set[0][0] - set[1][0])
           for (let i=0; i<=deltaXY;i++) {
                let key = `[${x},${y}]`
                markedCells.has(key) ? markedCells.set(key, markedCells.get(key) +1) : markedCells.set(key, 1)
                set[1][0] >= set[0][0] ? x++ : x--
                set[1][1] >= set[0][1] ? y++ : y--
            }
        }
    })
    return [...markedCells.values()].filter(cell => cell >= 2).length
}
let setPartTwo = input.filter(sets =>
    (sets[0][0] == sets[1][0]) ||
    (sets[0][1] == sets[1][1]) ||
    (Math.abs(sets[0][0] - sets[1][0]) == Math.abs(sets[0][1] - sets[1][1]))
)
console.log('Day 5 - part 2: ' + getMarkedCells_2(setPartTwo))
