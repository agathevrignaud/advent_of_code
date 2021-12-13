{/* Day 14 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(x => {
        let parsedReindeer = x.match(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds/)
        return {speed: parseInt(parsedReindeer[2]), fly: parseInt(parsedReindeer[3]), rest: parseInt(parsedReindeer[4])}
    })

{/* part 1 */}
function getDistances(reindeers,step){
    let distances = []
    reindeers.forEach(reindeer => {
        let distance = 0
        let n = Math.floor(step / (reindeer.fly + reindeer.rest))
        let r = step % (reindeer.fly + reindeer.rest)
        distance = n * (reindeer.speed * reindeer.fly)
        if (r > reindeer.fly) {
            distance = distance + (reindeer.speed * reindeer.fly)
        } else {
            distance = distance + r * reindeer.speed
        }
        distances.push(distance)
    })
    return distances
}
console.log('Day 14 - part 1: ' + getDistances(input,2503).sort((a, b) => a - b)[input.length - 1])

{/* part 2 */}
function getPoints(reindeers,steps) {
    let points = new Array(input.length).fill(0)
    for (let i=1; i<=steps;i++) {
        let j = getDistances(reindeers,i).indexOf(Math.max(...getDistances(reindeers,i)));
        points[j] += 1
    }
    return points
}
console.log('Day 14 - part 2: ' + getPoints(input,2503).sort((a, b) => a - b)[input.length - 1])