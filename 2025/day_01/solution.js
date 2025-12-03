{/* Day 1 - 2021 */}

const fs = require("fs");
const input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)


{/* part 1 */}
function countDialPointingToZero(input) {
    let counter = 0
    let pointsAt = 50

    input.forEach((rotation) => {
        let turn = rotation[0]
        let n = Number(rotation.substring(1))

        if (turn === 'L') { 
            pointsAt -= n 
        } 
        if (turn === 'R') {
            pointsAt += n 
        }

        pointsAt = ((pointsAt % 100) + 100) % 100;
        if (pointsAt === 0) counter += 1
    })
    return counter
}

console.log('Day 1 - part 1: ' + countDialPointingToZero(input))

{/* part 2 */}
function countDialPointingToZero2(input) {
    let counter = 0
    let pointsAt = 50

    input.forEach((rotation) => {
        let turn = rotation[0]
        let start = pointsAt
        let n = Number(rotation.substring(1))

        if (turn === 'L') { 
            pointsAt -= n 
        } 
        if (turn === 'R') {
            pointsAt += n 
        }  


        let delta = pointsAt - start
        counter += Math.floor(Math.abs(delta) / 100)
        pointsAt = ((pointsAt % 100) + 100) % 100 

        if (delta > 0) { // right
            if (pointsAt < ((start % 100) + 100) % 100) counter += 1
        } else if (delta < 0) { // left
            if (pointsAt > ((start % 100) + 100) % 100) counter += 1
        }
        
    })
    return counter
}

console.log('Day 1 - part 2: ' + countDialPointingToZero2(input))