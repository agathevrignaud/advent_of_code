{/* Day 4 - 2022 */}

const fs = require("fs");
let pairs = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(pair => { return pair.split(',').map(item => item.split('-'))})

// utils
isContained = (a,b) => {
    s1 = Number(a[0]) 
    e1 = Number(a[1])
    s2 = Number(b[0])
    e2 = Number(b[1])
    return (s1 >= s2 && e1 <= e2) ||  (s1 <= s2 && e1 >= e2)
}

overlaps = (a,b) => {
    s1 = Number(a[0]) 
    e1 = Number(a[1])
    s2 = Number(b[0])
    e2 = Number(b[1])
    return (s1 >= s2 && e1 <= e2) ||  (s1 <= s2 && e1 >= e2) || (s1 <= e2 && s2 <= e1)
}

{/* part 1 */}
countContainedRanges = (pairs) => {
    let sum = 0
    pairs.map(pair =>  {
        if (isContained(pair[0], pair[1])) sum++
    })
    return sum
}

console.log('Day 4 - part 1: ' + countContainedRanges(pairs))

{/* part 2 */}
countContainAndOverlapRanges = (pairs) => {
    let sum = 0
    pairs.map(pair =>  {
        if (overlaps(pair[0], pair[1])) sum ++
    })
    return sum
}

console.log('Day 4 - part 2: ' + countContainAndOverlapRanges(pairs))
