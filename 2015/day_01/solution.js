{/* Day 1 - 2021 */}

const fs = require("fs");
const input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split("")
    .map(String);

{/* part 1 */}
function getFloorNumber(directions) {
    return directions.filter(x => x == '(').length - directions.filter(x => x == ')').length
}
console.log('Day 1 - part 1: ' + getFloorNumber(input))

{/* part 2 */}
function getFloorNumber_minus1(directions) {
    let floor, i, res
    floor = i = res = 0
    while (i < directions.length) {
        directions[i] == '(' ? floor++ : floor--
        if (floor == -1) {
            res = i+1
            i = Infinity
        }
        i++
    }
    return res
}
console.log('Day 1 - part 2: ' + getFloorNumber_minus1(input))