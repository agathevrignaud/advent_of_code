{/* Day 3 - 2021 */}

const fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split('')
    .map(String)

{/* part 1 */}
function presentDelivery(instructions) {
    let houses = new Map()
    let i, j, key
    i = j = 0
    instructions.map(instruction => {
        key = `[${i},${j}]`
        houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
        switch (instruction) {
            case '^':
                i++
                break;
            case 'v':
                i--
                break;
            case '>':
                j++
                break;
            case '<':
                j--
                break;
        }
        key = `[${i},${j}]`
        houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
    })
    return [...houses.values()].filter(presents => presents >= 1).length
}
console.log('Day 3 - part 1: ' + presentDelivery(input))


{/* part 2 */}
function presentDelivery_2(instructions) {
    let houses = new Map()
    let i, j, key
    let k, l
    i = j = k = l = 0
    instructions.map((instruction, index) => {
        if (index % 2 === 0) { // pair : Santa
            key = `[${i},${j}]`
            houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
            switch (instruction) {
                case '^':
                    i++
                    break;
                case 'v':
                    i--
                    break;
                case '>':
                    j++
                    break;
                case '<':
                    j--
                    break;
            }
            key = `[${i},${j}]`
            houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
        } else {
            key = `[${k},${l}]`
            houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
            switch (instruction) {
                case '^':
                    k++
                    break;
                case 'v':
                    k--
                    break;
                case '>':
                    l++
                    break;
                case '<':
                    l--
                    break;
            }
            key = `[${k},${l}]`
            houses.has(key) ? houses.set(key, houses.get(key) +1) : houses.set(key, 1)
        }
    })
    return [...houses.values()].filter(presents => presents >= 1).length
}
console.log('Day 3 - part 2: ' + presentDelivery_2(input))