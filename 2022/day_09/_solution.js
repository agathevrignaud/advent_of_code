{/* Day 10 - 2022 */}

const fs = require("fs");
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

const cyclesToCheck = [20, 60, 100, 140, 180, 220]

{/* part 1 */}
const signalStrength = (signals) => {
    let totalSignalStrength = 0
    let cycle = 0
    let x = 1

    signals.forEach(signal => {
        switch (signal.split(' ')[0]) {
            case 'noop':
                cycle++
                if (cyclesToCheck.includes(cycle)) {
                    totalSignalStrength += (x * cycle)
                }
                break;
            case ('addx'):
                for (i=1;i<=2;i++) { 
                    cycle++
                    if (cyclesToCheck.includes(cycle)) {
                        totalSignalStrength += (x * cycle)
                    }
                    if(i == 2) { x += Number(signal.split(' ')[1]) }
                }
                break;
        }    
    })

    return totalSignalStrength
}
console.log('Day 10 - part 1: ' + signalStrength(input))

{/* part 2 */}
const draw = (signals) => {
    let finalDrawing = []

    let currentCRT = ''
    let CRT = 1
    let cycle = 1
    let x = 1

    signals.forEach(signal => {
        switch (signal.split(' ')[0]) {
            case 'noop':
                cycle++
                (CRT == x || CRT == x+1 || CRT == x+2) ? currentCRT += '#' : currentCRT += ' '
                CRT++
                if (cycle == 41) {
                    finalDrawing.push(currentCRT)
                    currentCRT = ''
                    CRT = 1
                    cycle = 1
                }
                break;
            case ('addx'):
                for (i=1;i<=2;i++) { 
                    cycle++
                    (CRT == x || CRT == x+1 || CRT == x+2) ? currentCRT += '#' : currentCRT += ' '
                    CRT++
                    if (cycle == 41) {
                        finalDrawing.push(currentCRT)
                        currentCRT = ''
                        CRT = 1
                        cycle = 1
                    }
                    if(i == 2) { x += Number(signal.split(' ')[1]) }
                }
                break;
        }    
    })
    console.log('Day 10 - part 2: ')
    console.log(finalDrawing)
}
draw(input)
