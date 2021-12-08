{/* Day 2 - 2021 */}

const fs = require("fs");
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

input = input.map(command => command.split(' '))

{/* part 1 */}
function pilotingSubmarine(input) {
    let forward = 0
    let depth = 0
    input.map( command => {
        switch (command[0]) {
            case 'forward':
                forward += parseInt(command[1])
                break;
            case 'down':
                depth += parseInt(command[1])
                break;
            case 'up':
                depth -= parseInt(command[1])
                break;
        }
    })
    return forward*depth
}
console.log('Day 2 - part 2: ' + pilotingSubmarine(input))

{/* part 2 */}
function pilotingSubmarine_aim(input) {
    let forward = 0
    let depth = 0
    let aim = 0
    input.map( command => {
        switch (command[0]) {
            case 'forward':
                forward += parseInt(command[1])
                depth += aim * parseInt(command[1])
                break;
            case 'down':
                aim += parseInt(command[1])
                break;
            case 'up':
                aim -= parseInt(command[1])
                break;
        }
    })
    return forward*depth
}
console.log('Day 2 - part 2: ' + pilotingSubmarine_aim(input))