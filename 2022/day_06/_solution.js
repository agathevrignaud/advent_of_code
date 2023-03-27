{/* Day 6 - 2022 */}

const fs = require("fs");
let stream = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })

{/* part 1 */}
const detectMarker = (s) => {
    for (i=3;i<s.length;i++) {
        r = s.substring(i-3,i)
        if (!r.includes(s[i]) && !(r.split('').some((e, i, arr) => arr.indexOf(e) !== i))) {
            return i+1
        } 
    }
}

console.log('Day 6 - part 1: ' + detectMarker(stream))

{/* part 2 */}
const detectMessage = (s) => {
    for (i=13;i<s.length;i++) {
        r = s.substring(i-13,i)
        if (!r.includes(s[i]) && !(r.split('').some((e, i, arr) => arr.indexOf(e) !== i))) {
            return i+1
        } 
    }
}

console.log('Day 6 - part 2: ' + detectMessage(stream))

