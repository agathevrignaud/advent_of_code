{/* Day 11 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(x => x.split('').map(Number))

{/* part 1 */}
function getFlashes(steps){
    let flashes, flashesAt100, step
    flashes = flashesAt100 = step = 0
    let isAllFlash = false

    let getOctopusFlash = ([j,k]) => {  // recursive similar to day 9 (except I can't reset the cell directly inside)
        if (k < 0 || k >= 10 || j < 0 || j >=10 ) return 0
        input[j][k]++
        if (input[j][k] == 10) {
            flashes ++
            getOctopusFlash([j + 1, k])
            getOctopusFlash([j - 1, k])
            getOctopusFlash([j, k + 1])
            getOctopusFlash([j, k - 1])
            getOctopusFlash([j - 1, k - 1])
            getOctopusFlash([j - 1, k + 1])
            getOctopusFlash([j + 1, k - 1])
            getOctopusFlash([j + 1, k + 1])
        }
    };

    while (step < steps && !isAllFlash) {
        for(let j=0;j<input.length;j++) {
            for (let k=0;k<input.length;k++) {
                getOctopusFlash([j,k])
            }
        }
        isAllFlash = true
        for(let j=0;j<input.length;j++) {
            for (let k=0;k<input.length;k++) {
                if(input[j][k] > 9) {
                    input[j][k] = 0
                } else {
                    isAllFlash = false
                }
            }
        }
        if (step == 99) { flashesAt100 = flashes } // part 1 answer
        step++
    }
    return (`Day 11 - part 1: ${flashesAt100}\nDay 11 - part 2: ${step}`)
}
console.log(getFlashes(1000))