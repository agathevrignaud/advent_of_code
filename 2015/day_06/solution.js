{/* Day 6 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

let commands = []
input.map(command => {
    let parsedCommand = command.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/) // had a little help for this one
    commands.push({
        instruction: parsedCommand[1],
        start : {
            i : parseInt(parsedCommand[2]),
            j: parseInt(parsedCommand[3])
        },
        end : {
            i : parseInt(parsedCommand[4]),
            j: parseInt(parsedCommand[5])
        }
    })
})

{/* part 1 */}
function getLights(){
    let lights = new Map()
    commands.map(command => {
        for (let i = command.start.i; i <= command.end.i; i++) {
            for (let j = command.start.j; j <= command.end.j; j++) {
                if (lights[i] == undefined) lights[i] = [];
                if (lights[i][j] == undefined) lights[i][j] = false;
                let key = `[${i},${j}]`
                switch (command.instruction) {
                    case "turn on":
                        lights.set(key, true)
                        break;
                    case "turn off":
                        lights.set(key, false)
                        break;
                    case "toggle":
                        lights.set(key, !lights.get(key))
                        break;
                }
            }
        }
    })
    return [...lights.values()].filter(x => x == true).length
}
console.log('Day 6 - part 1: ' + getLights())

{/* part 2 */}
function getBrightness() {
    let lights = new Map()
    commands.map(command => {
        for (let i = command.start.i; i <= command.end.i; i++) {
            for (let j = command.start.j; j <= command.end.j; j++) {
                if (lights[i] == undefined) lights[i] = [];
                if (lights[i][j] == undefined) lights[i][j] = false;
                let key = `[${i},${j}]`
                switch (command.instruction) {
                    case "turn on":
                        lights.has(key) ? lights.set(key, lights.get(key) +1) : lights.set(key, 1)
                        break;
                    case "turn off":
                        lights.has(key) ?  lights.set(key, lights.get(key) - 1 < 0 ? 0 : lights.get(key) - 1) : ''
                        break;
                    case "toggle":
                        lights.has(key) ? lights.set(key, lights.get(key) + 2) : lights.set(key, 2)
                        break;
                }
            }
        }
    })
    return [...lights.values()].reduce((acc, val) => acc + val)
}
console.log('Day 6 - part 2: ' + getBrightness())
