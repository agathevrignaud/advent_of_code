{/* Day 9 - 2021 */}
function myParseInt(s,r,a) { return parseInt(s,10); }
const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(String)

let points = []
input.map(x => points.push([x]))
points = points.map(point => point.toString().split("").map(Number))

{/* part 1 */}
let riskLevel = 0
let lowPoints = []
function getLowPoints(points){
    let top, right, left, bottom
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[i].length; j++) {
            let current = points[i][j];
            top = points[i - 1] === undefined ? Infinity : points[i - 1][j];
            left = points[i][j - 1] === undefined ? Infinity : points[i][j - 1];
            right = points[i][j + 1] === undefined ? Infinity : points[i][j + 1];
            bottom = points[i + 1] === undefined ? Infinity : points[i + 1][j];
            if (current < top && current < bottom && current < right && current < left) {
                riskLevel += points[i][j] + 1
                lowPoints.push([i, j])
            }
        }
    }
    return riskLevel
}
console.log('Day 9 - part 1: ' + getLowPoints(points))

{/* part 2 */}
function getBasinsSizes_3() {
    let getBasinSize = ([i, j]) => {
        if ((i < 0 || i > points.length - 1) || (j < 0 || j > points[0].length - 1) || points[i][j] === 9) return 0 // process stops
        points[i][j] = 9; // mark as processed & won't be called a second time
        return 1 + getBasinSize([i + 1, j]) + getBasinSize([i - 1, j]) + getBasinSize([i, j + 1]) + getBasinSize([i, j - 1])
    };
    let basinsSizes = lowPoints.map(getBasinSize).sort((a, b) => a - b) // sort asc
    return (basinsSizes[basinsSizes.length-1]*basinsSizes[basinsSizes.length-2]*basinsSizes[basinsSizes.length-3])
    // basinSizes.slice(-3).reduce((acc, val) => acc*value) ?
}
console.log('Day 9 - part 2: ' + getBasinsSizes_3())