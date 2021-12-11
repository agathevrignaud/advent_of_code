{/* Day 10 - 2021 */}

{/* part 1 & 2 */}
function getNumbers(input) {
    let numbers = input.match(/(.)\1*/gm).map(Number) // https://regex101.com/r/gigapy/1
    let solution = ''
    let firstPartSolution = ''
    let step = 0
    while (step < 50) {
        solution = ''
        numbers.map(number => {
            solution += number.toString().length + number.toString()[0]
        })
        numbers = solution.match(/(.)\1*/gm).map(Number)
        if (step == 39) { // part 1
            firstPartSolution = solution
        }
        step++
    }
    return `Day 10 - part 1: ${firstPartSolution.length}\nDay 10 - part 2: ${solution.length}`
}

console.log(getNumbers('1321131112'))