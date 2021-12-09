{/* Day 2 - 2021 */}

const fs = require("fs");
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(dimensions => { return dimensions.split('x').map(Number) })

{/* part 1 */}
function orderWrappingPaper(dimensions) {
    let total = 0
    let l,w,h
    dimensions.map(dimension => {
        l = dimension[0]
        w = dimension[1]
        h = dimension[2]
        total += 2*l*w + 2*w*h + 2*h*l + Math.min(l*w,w*h,h*l)
    })
    return total
}
console.log('Day 2 - part 1: ' + orderWrappingPaper(input))

{/* part 2 */}
function orderRibbon(dimensions) {
    let total = 0
    dimensions.map(dimension => {
        total += (dimension.sort((a,b) => a-b)[0]*2 + dimension.sort((a,b) => a-b)[1]*2) + (dimension.reduce((acc, val) => acc*val))
    })
    return total
}
console.log('Day 2 - part 2: ' + orderRibbon(input))