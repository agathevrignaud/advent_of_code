{/* Day 5 - 2022 */}

const fs = require("fs");
let moves = []
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(move => {
        let parsedInput = move.match(/move (.*) from (.*) to (.*)/)
        moves.push([Number(parsedInput[1]), Number(parsedInput[2]), Number(parsedInput[3])])
    })

let stacks = [
    'ZPBQMDN',
    'VHDMQZLC',
    'GZFVDRHQ',
    'NFDGH',
    'QFN',
    'TBFZVQD',
    'HSVDZTMQ',
    'QNPFGM',
    'MRWB'
]
stacks.map(stack => stack.split(''))


{/* part 1 & 2 */}
getTopCrates = (s, moves, crane) => {
    moves.forEach(move => {
        let [nbr, from, to] = move
        // move x crate from stack 1 to stack 2
        crane === '9000' ? s[to-1] = s[from-1].substring(0,nbr).split('').reverse().join('') + s[to-1] : s[to-1 ] = s[from-1].substring(0,nbr) + s[to-1]
        s[from-1] = s[from-1].substring(nbr)
    })
    return s.map(stack => stack.charAt(0)).join('')
}

console.log('Day 5 - part 1: ' + getTopCrates(stacks, moves, '9000'))
console.log('Day 5 - part 2: ' + getTopCrates(stacks, moves, '9001'))

