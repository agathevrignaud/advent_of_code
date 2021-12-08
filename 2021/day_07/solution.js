{/* Day 7 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(',')
    .map(Number)

{/* part 1 */}
function cheapestRoute(crabs) {
    let cheapest = Infinity;
    for (let i = Math.min(...crabs); i <= Math.max(...crabs); i++) {
        let fuel = 0
        for (let crab of crabs) {
            fuel += Math.abs(crab - i);
        }
        if (fuel < cheapest) {
            cheapest = fuel
        }
    }
    return cheapest
}
console.log('Day 7 - part 1: ' + cheapestRoute(input))

{/* part 2 */}
function cheapestRoute_2(crabs) {
    let cheapest = Infinity;
    let distance = 0
    for (let i = Math.min(...crabs); i <= Math.max(...crabs); i++) {
        let fuel = 0
        for (let crab of crabs) {
            distance = Math.abs(crab - i);
            fuel += (distance * (distance + 1)) / 2
        }
        if (fuel < cheapest) {
            cheapest = fuel
        }
    }
    return cheapest
}
console.log('Day 7 - part 2: ' + cheapestRoute_2(input))