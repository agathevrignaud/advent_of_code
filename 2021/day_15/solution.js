{/* Day 15 - 2021 */}

const dijkstra = require('dijkstrajs');
const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map((line) =>
        [...line].map(Number)
    )


{/*
    https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
    https://levelup.gitconnected.com/dijkstras-shortest-path-algorithm-in-a-grid-eb505eb3a290
*/}


{/* part 1 */}
function buildAdjMatrixObject(input) {
    const adjObject = {};
    for (let y = 0; y < input.length; y++) {
        const row = input[y];
        for (let x = 0; x < row.length; x++) {
            adjObject[y+','+x] = {};
            const adjacent = [];

            if(y > 0) adjacent.push({x: x, y: y-1})
            if(y < input.length-1) adjacent.push({x: x, y: y+1})
            if(x > 0) adjacent.push({x: x-1, y: y})
            if(x < row.length-1) adjacent.push({x: x+1, y: y})

            for(let f = 0; f < adjacent.length; f++) {
                const a = adjacent[f];
                const adjNode = input[a.y][a.x];
                adjObject[y+','+x][adjacent[f].y+','+adjacent[f].x] = adjNode;
            }
        }
    }
    return adjObject;
}
function shortestPathSmallestRisk(input) {
    const adjObject = buildAdjMatrixObject(input)
    const shortestPath = dijkstra.find_path(adjObject, '0,0', `${input.length - 1},${input[0].length - 1}`);
    let totalRisk = 0;
    shortestPath.splice(1, shortestPath.length).map(risk => {
        risk = risk.split(',').map(Number);
        totalRisk += input[risk[0]][risk[1]];
    });
    return totalRisk ;
}

{/* part 2 (additions) */}
function updateRow(row) {
    let updatedRow = row.map(item => {
        item += 1
        if (item > 9) item = 1
        return item
    })
    return updatedRow
}
function updateTiles(startingTile) {
    let finalTile = []
    let updatedRow = []
    startingTile.map(row => {
        updatedRow.push(row)
        for (let i=0;i<4;i++) {
            row = updateRow(row)
            updatedRow.push(row)
        }
        finalTile.push(updatedRow.flat())
        updatedRow = []
    })
    startingTile = startingTile.map(row => {
        return updateRow(row)
    })
    return {finalTile, startingTile}
}
function buildLargerCave(input) {
    let startingTile = [...input];
    let finalTile = []
    for (let i=0;i<5;i++) {
        let r = updateTiles(startingTile)
        startingTile = r.startingTile
        finalTile.push(r.finalTile)
    }
    let finalCave = []
    finalTile.map(tile => {
        tile.map(t =>{
            finalCave.push(t)
        })
    })
    return finalCave
}

console.log('Day 15 - part 1: ', shortestPathSmallestRisk(input))
console.log('Day 15 - part 2: ', shortestPathSmallestRisk(buildLargerCave(input)))

