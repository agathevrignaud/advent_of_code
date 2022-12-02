{/* Day 18 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(s => s.split(',').join("").trim())
    .map(s => {
        return s.split('').map(s =>isNaN(s)?s:Number(s));
    });

// addition
function add(a,b) {
    return ["[",...a,...b,"]"]
}

// explode
function explode(a) {
    let openBracket = 0
    for (let i=0; i < a.length; i++) {
        let char = a[i]
        if (char === "[") openBracket++
        if (char === "]") openBracket--

        if (openBracket > 4) {
            let nestedPair = a.splice(i,4)
            console.log(a)
            if (!isNaN(a[i-1])) {
                a[i-1] += nestedPair[1]
                console.log(a)
            }
            if (!isNaN(a[i])) {
                a[i] += nestedPair[2]
                console.log(a)
            }
            a.splice(i, 0,0);
        }

    }
}
//split

{/* part 1 */}
function snailfishMaths(numbers) {
    let number = numbers[0]
    numbers.shift()
    do {
        number = add(number, numbers[0])
        explode(number)
        // Si les conditions d'explode sont remplies :

        // Si les conditions de split sont remplies :

        // on additionne le nombre suivant


        numbers.shift()
    } while (numbers.length > 0)
    // calcul sur le nombre final
    return number
}

console.log('Day 18 - part 1: ', snailfishMaths(input))

{/* part 2 */}
console.log('Day 18 - part 2: ')