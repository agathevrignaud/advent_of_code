{/* Day 8 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(row => row.split('|'))

const signals = []
const segments = []

for (let i=0;i<input.length;i++) {
    signals.push(input[i][0].trim().split(' '))
    segments.push(input[i][1].trim().split(' '))
}

{/* part 1 (brute force) */}
function findSimplePatterns(segments){
    let count = 0
    for(let i=0;i<segments.length;i++) {
        segments[i].map(segment => {
            switch (segment.length) {
                case 2:
                case 4:
                case 3:
                case 7:
                    count += 1
                    break;
            }
        })
    }
    return count
}
console.log('Day 8 - part 1: ' + findSimplePatterns(segments))

{/* part 2 */}
function calculateSignalPatterns(input){
    let result = 0
    for(let i=0;i<input.length;i++) {

            let patterns = []
            // 1,4,7,8
            patterns[1] = signals[i].find(x => x.length === 2)
            patterns[4] = signals[i].find(x => x.length === 4)
            patterns[7] = signals[i].find(x => x.length === 3)
            patterns[8] = signals[i].find(x => x.length === 7)

            // 2,3,5
            patterns[3] = signals[i].find(x => {
                return x.split('').length == 5 && x.split('').filter(value => !patterns[7].split('').includes(value)).length == 2;
            });
            patterns[5] = signals[i].find(x => {
                return x.split('').length == 5 && x.split('').filter(value => !patterns[4].split('').includes(value)).length == 2 && x != patterns[3];
            })
            patterns[2] = signals[i].find(x => {
                return x.split('').length == 5 && x != patterns[3] && x != patterns[5];
            })

            //  0,6,9
            patterns[6] = signals[i].find(x => {
                return x.split('').length == 6 && x.split('').filter(value => !patterns[1].split('').includes(value)).length == 5;
            })
            patterns[9] = signals[i].find(x => {
                return x.split('').length == 6 && x.split('').filter(value => !patterns[4].split('').includes(value)).length == 2 && x != patterns[6];
            })
            patterns[0] = signals[i].find(x => {
                return x.split('').length == 6 && x != patterns[6] && x != patterns[9];
            })

            patterns.forEach((pattern, i) => {
                patterns[i] = pattern.split('').sort().join('');
            });

            let number = ''
            segments[i].forEach(segment => {
                number += patterns.indexOf(segment.split('').sort().join(''));
            })
            result += parseInt(number)
    }
    return result
}
console.log('Day 8 - part 2: ' + calculateSignalPatterns(input))