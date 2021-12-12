{/* Day 12 - 2021 */}

let paths = []
const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(x => {
        let [a,b] = x.split('-')
        paths[a] = [...(paths[a] ?? []), b]
        paths[b] = [...(paths[b] ?? []), a]
    })

{/* part 1 */}
function findYourWay(){
    let allPaths = []

    const findNextPath = (cave, path) => {
        if (cave === 'end') {
            allPaths.push([...path, cave])
            return
        }
        let nextCave = [...path, cave]
        paths[cave].forEach(x => {
            if (x.toUpperCase() == x || path.indexOf(x) === -1) findNextPath(x, nextCave);
        })
    }
    findNextPath('start', [])
    return allPaths.length
}
console.log('Day 12 - part 1: ' + findYourWay())

{/* part 2 */}
function findYourWay_2(){
    let allPaths = []

    const findNextPath = (cave, path) => {
        if (cave === 'start' && path.length > 0) return
        if (cave === 'end') {
            allPaths.push([...path, cave])
            return
        }
        let nextCave = [...path, cave]

        const visits = {}
        nextCave.map(x => { // count if nextCave visit will mean a small cave is visited twice
            if (x.toLowerCase() === x) { // check if small cave
                visits[x] = (visits[x] ?? 0) + 1
            }
        })
        const visitedMoreThanTwice = Object.values(visits).filter(x => x > 1).length > 0

        paths[cave].forEach(x => {
                if (!visitedMoreThanTwice || x.toUpperCase() == x || path.indexOf(x) === -1) {
                    findNextPath(x, nextCave);
                }
        })
    }
    findNextPath('start', [])
    return allPaths.length
}
console.log('Day 12 - part 2: ' + findYourWay_2())