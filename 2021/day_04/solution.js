{/* Day 4 - 2021 */}

const fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

{/* parsing input */}
var numbers = input.splice(0,1)[0].split(',').map(Number)
var boards = []
const regex = /\d+/g    // https://www.dofactory.com/javascript/regular-expressions
for (let i=0;i<input.length;i++) {
    if (input[i].length < 1) {
        boards.push([]);
    } else {
        let row = input[i].match(regex).map(Number);
        boards[boards.length - 1].push(row);
    }
}


{/* part 1 */}
function victoryScore(boardIndex, number) {
    let winBoard = boards[boardIndex]
    let sum = 0
    for (let i=0;i<5;i++) {
        for (let j=0;j<5;j++) {
            if (winBoard[i][j] != -1) {
                sum += winBoard[i][j]
            }
        }
    }
    return sum*number
}
function victoryConditions(board) {
    let rowWin = false
    let columnWin = false
    for (let i=0;i<5;i++) {
        rowWin = (board[i][0] === -1 && board[i][1] === -1 && board[i][2] === -1 && board[i][3] === -1 && board[i][4] === -1)
        columnWin = (board[0][i] === -1 && board[1][i] === -1 && board[2][i] === -1 && board[3][i] === -1 && board[4][i] === -1)
        if (rowWin || columnWin) break
    }
    return rowWin || columnWin
}
function calculateFinalScore_Win(numbers, boards) {
    let victory = false
    let score = 0
    for (let h=0; h<numbers.length; h++) {
        boards.map((board, index) => {
           if (!victory) {
                for (let i = 0; i <5; i++) {
                    for (let j = 0; j <5; j++) {
                        if (board[i][j] == numbers[h]) {
                            board[i][j] = -1
                        }
                    }
                }
                if (victoryConditions(board)) {
                    victory = true
                    score = victoryScore(index, numbers[h])
                }
            }
        })
    }
    return score
}
console.log('Day 4 - part 1: ' + calculateFinalScore_Win(numbers, boards))

{/* part 2 */}
function calculateFinalScore_Lost(numbers, boards) {
    let score = 0
    let victory = true
    let winners = []
    for (let h=0; h<numbers.length; h++) {
        boards.map((board, index) => {
            if (!winners.includes(index)) {
                for (let i = 0; i <5; i++) {
                    for (let j = 0; j <5; j++) {
                        if (board[i][j] == numbers[h]) {
                            board[i][j] = -1
                        }
                    }
                }
                if (victoryConditions(board)) {
                    winners.push(index)
                    score = victoryScore(index, numbers[h])
                }
            }
        })
    }
    return score
}
console.log('Day 4 - part 2: ' + calculateFinalScore_Lost(numbers, boards))