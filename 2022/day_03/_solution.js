{/* Day 3 - 2022 */}

const fs = require("fs");
let rucksacks = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(str => { return str.split('')})

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

intersection = (arr1, arr2, arr3) => {
    const commonElements = arr1.filter(element => arr2.includes(element) && arr3.includes(element));
    return commonElements;
}
  

{/* part 1 */}
sumPriorities = (rucksacks) => {
    let sum = 0
    rucksacks.map(rucksack => {
        let rucksack1 = rucksack.slice(0, rucksack.length / 2)
        let rucksack2 = rucksack.slice(rucksack.length / 2)
        // Find the common items
        let commonItems = rucksack1.filter(value => rucksack2.includes(value)).filter((e, i, c) => { return c.indexOf(e) === i })
        // Get the priority
        commonItems.map(item => {
            sum += alphabet.indexOf(item)+1
        })
    })
    return sum
}

console.log('Day 3 - part 1: ' + sumPriorities(rucksacks))

{/* part 2 */}
sumPriorities2 = (rucksacks) => {
    let sum = 0
    for(i=0; i<rucksacks.length; i+=3) {
        let commonItems = intersection(rucksacks[i], rucksacks[i+1], rucksacks[i+2]).filter((e, i, c) => { return c.indexOf(e) === i })
        // Get the priority
        commonItems.map(item => {
            sum += alphabet.indexOf(item)+1
        })
    }
    return sum
}

console.log('Day 3 - part 2: ' + sumPriorities2(rucksacks))
