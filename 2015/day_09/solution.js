{/* Day 9 - 2021 */}

const fs = require("fs")
let adjObject = {}
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(destination => {
        let regEx = destination.match(/(\w+) to (\w+) = (\d+)/)
        if (!adjObject[`${regEx[1]}`]) {
            adjObject[`${regEx[1]}`] = {}
            adjObject[`${regEx[1]}`][`${regEx[2]}`] = regEx[3]
        }
        if (!adjObject[`${regEx[2]}`]) {
            adjObject[`${regEx[2]}`] = {}
            adjObject[`${regEx[2]}`][`${regEx[1]}`] = regEx[3]
        }
        if (adjObject[`${regEx[1]}`])
            adjObject[`${regEx[1]}`][`${regEx[2]}`] = regEx[3]
        if (adjObject[`${regEx[2]}`])
            adjObject[`${regEx[2]}`][`${regEx[1]}`] = regEx[3]
    })

function permutator(inputArr) {
    let results = [];
    function permute(arr, memo) {
        var cur, memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }
        return results;
    }
    return permute(inputArr);
}

function calculateRoutes() {
    const allPaths = []
    const permutations = permutator(Object.keys(adjObject))
    permutations.map(permutation => {
        let km = 0
        for (let i = 0; i < Object.keys(adjObject).length - 1; i++) {
            km += Number(adjObject[permutation[i]][permutation[i + 1]])
        }
        allPaths.push(km)
    })
    return {min:allPaths.sort((a, b) => a - b)[0], max: allPaths.sort((a,b) => a - b)[allPaths.length-1]}
}

{/* part 1 */}
console.log('Day 9 - part 1: ', calculateRoutes().min)

{/* part 2 */}
console.log('Day 9 - part 2: ', calculateRoutes().max)
