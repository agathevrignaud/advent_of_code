{/* Day 10 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(e => !(e.length == 0)) //filter empty lines

let folds = input.filter(e => e.split(' ')[0] == 'fold').map(fold => {
    let parsedFold = fold.match(/fold along (x|y)=(\d+)/)
    return {angle:parsedFold[1], value: parseInt(parsedFold[2])}
})
let dots = input.filter(e => !(e.split(' ')[0] == 'fold')).map(e => {
    let[x,y] = e.split(',').map(Number)
    return {x,y}
})

{/* part 1 */}
function countDots(dots, fold) {
    dots = dots.map(dot => {
        return {
            x: fold.angle === 'x' ? (dot.x > fold.value ? dot.x - (dot.x - fold.value) * 2 : dot.x) : dot.x,
            y: fold.angle === 'y' ? (dot.y > fold.value ? dot.y - (dot.y - fold.value) * 2 : dot.y) : dot.y,
        }
    })
    let uniqueDots = [...new Map(dots.map(dot => [JSON.stringify([dot.x,dot.y]), dot])).values()]
    return uniqueDots.length
}
console.log('Day 12 - part 1: ' + countDots(dots,folds[0]))

{/* part 2 */}
function findHiddenWord(dots, folds) {
    folds.map(fold => {
        dots = dots.map(dot => {
            return {
                x: fold.angle === 'x' ? (dot.x > fold.value ? dot.x - (dot.x - fold.value) * 2 : dot.x) : dot.x,
                y: fold.angle === 'y' ? (dot.y > fold.value ? dot.y - (dot.y - fold.value) * 2 : dot.y) : dot.y,
            }
        })
   })

    let paper = []
    let xMax = dots.reduce((acc, dot) => acc = acc > dot.x ? acc : dot.x, 0);
    let yMax = dots.reduce((acc, dot) => acc = acc > dot.y ? acc : dot.y, 0);

    // fill the paper with empty ''
    for (let y=0;y<yMax+1;y++) {
        paper.push([])
        for (let x=0;x<xMax+1;x++) {
            paper[y].push(' ')
        }
    }

    // fill with dots
    dots.map(({x,y}) => paper[y][x] = '█'); // alt+219 : █
    return paper.map(row => row.join('')).join('\n')
}
console.log('Day 12 - part 2: \n' + findHiddenWord(dots,folds))