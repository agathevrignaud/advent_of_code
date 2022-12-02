{/* Day 2 - 2022 */}

const fs = require("fs");
let plays = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)

{/* part 1 */}
function getTotalScore(plays) {
    let totalScore = 0
    let turnScore = 0
    plays.forEach(play => {
        turnScore = 0
        play.replace()
        totalScore += turnScore
        turnScore = 0
    })
    return totalScore
}
console.log('Day 2 - part 1: ' + getTotalScore(plays))

{/* part 2 */}
const getTurnPoints = (opp, me) => {
    let score = 0
    switch (me) {
        case 'X':
            score += 0
            switch (opp) {
                case 'A':
                    score += 3
                    break;
                case 'B':
                    score += 1
                    break;
                case 'C':
                    score += 2
                    break;
            }
            break;
        case 'Y':
            score += 3
            switch (opp) {
                case 'A':
                    score += 1
                    break;
                case 'B':
                    score += 2
                    break;
                case 'C':
                    score += 3
                    break;
            }
            break;
        case 'Z':
            score += 6
            switch (opp) {
                case 'A':
                    score += 2
                    break;
                case 'B':
                    score += 3
                    break;
                case 'C':
                    score += 1
                    break;
            }
            break;
    }
    return score
}
function getTotalScoreRedux(plays) {
    let totalScore = 0
    plays.forEach(play => {
        totalScore += getTurnPoints(play[0], play[2])
    })
    return totalScore
}
console.log('Day 2 - part 2: '  + getTotalScoreRedux(plays))
