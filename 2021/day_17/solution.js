{/* Day 17 - 2021 */}

const fs = require("fs")
let targetArea = {}
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(item => {
        let parsedTargetArea = item.match(/target area: x=(\d+)..(\d+), y=(.*\d+)..(.*\d+)/)
        targetArea = {
            xMin : Number(parsedTargetArea[1]),
            xMax : Number(parsedTargetArea[2]),
            yMin : Number(parsedTargetArea[4]),
            yMax : Number(parsedTargetArea[3])
        }
    })

{/* part 1 */}
function beetwin(target, position) { // pls don't mind the inner joke here
    return (position.x >= target.xMin && position.x <= target.xMax) && (position.y >= target.yMax && position.y <= target.yMin)
}
function trackHighestY(targetArea) {
    let highestY = 0
    for (let i = 0; i <targetArea.xMax; i++) {
        for (let j = 0 ; j < Math.abs(targetArea.yMax) ; j++) {
            let isReached = false
            let velocity = {x: i, y: j}
            let position = {x: 0, y: 0}
            let y = 0
            let maxY = 0

            do {
                y = position.y

                if (velocity.x > 0) {
                    position.x += velocity.x
                }
                position.y += velocity.y
                if (position.y >= y) maxY = y

                if (beetwin(targetArea, position)) {
                    isReached = true
                    if (maxY > highestY) highestY = maxY
                }

                velocity.y -= 1
                velocity.x -= 1

                if (position.x > targetArea.xMax || position.y <= targetArea.yMax ) isReached = true
            } while (!isReached)
        }
    }
    return highestY
}

console.log('Day 17 - part 1: ', trackHighestY(targetArea))

{/* part 2 */}
console.log('Day 17 - part 2: ')