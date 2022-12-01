{/* Day 1 - 2022 */}

const fs = require("fs");
const calories = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(Number);

const caloriesByElf = (t) => {
    let caloriesByElf = []
    let isFinished = false
    let i = 0
    while (!isFinished) {
        if (!t.includes(0)) {
            caloriesByElf.push(t.slice(0,i).reduce((acc,a) => acc+a, 0))
            isFinished = true
        }
        if (t[i] === 0) {
            caloriesByElf.push(t.slice(0,i).reduce((acc,a) => acc+a, 0))
            t = t.slice(i+1);
            i = 0
        }
        i++
    }
    return caloriesByElf
}

{/* part 1 */}
function topElfCalories(calories) {
    return Math.max(...caloriesByElf(calories));
}
console.log('Day 1 - part 1: ' + topElfCalories(calories))

{/* part 2 */}
function top3ElfCalories(calories) {
    return caloriesByElf(calories).sort( (a,b) => {return b - a}).slice(0,3).reduce((acc,a) => acc+a, 0)
}
console.log('Day 1 - part 2: ' + top3ElfCalories(calories))