{/* Day 11 - 2022 */}

const fs = require("fs");

let _input = [
    { 
        items : [79, 98],
        operation(old) {return old * 19},
        divisible_by : 23,
        test(value) { return (value % 23 === 0 ? 2 : 3)},
        items_inspected: 0
    },
    { 
        items : [54, 65, 75, 74],
        operation(old) {return old + 6},
        divisible_by : 19,
        test(value) { return (value % 19 === 0 ? 2 : 0)},
        items_inspected: 0
    },
    { 
        items : [79, 60, 97],
        operation(old) {return old * old},
        divisible_by : 13,
        test(value) { return (value % 13 === 0 ? 1 : 3)},
        items_inspected: 0
    },
    { 
        items : [74],
        operation(old) {return old + 3},
        divisible_by : 17,
        test(value) { return (value % 17 === 0 ? 0 : 1)},
        items_inspected: 0
    }
]

let input = [
    { 
        items : [64],
        operation(old) {return old * 7},
        divisible_by: 13,
        test(value) { return (value % 13 === 0 ? 1 : 3)},
        items_inspected: 0
    },
    { 
        items : [60, 84, 84, 65],
        operation(old) {return old + 7},
        divisible_by: 19,
        test(value) { return (value % 19 === 0 ? 2 : 7)},
        items_inspected: 0
    },
    { 
        items : [52, 67, 74, 88, 51, 61],
        operation(old) {return old * 3},
        divisible_by: 5,
        test(value) { return (value % 5 === 0 ? 5 : 7)},
        items_inspected: 0
    },
    { 
        items : [67, 72],
        operation(old) {return old + 3},
        divisible_by: 2,
        test(value) { return (value % 2 === 0 ? 1 : 2)},
        items_inspected: 0
    },
    { 
        items : [80, 79, 58, 77, 68, 74, 98, 64],
        operation(old) {return old * old},
        divisible_by: 17,
        test(value) { return (value % 17 === 0 ? 6 : 0)},
        items_inspected: 0
    },
    { 
        items : [62, 53, 61, 89, 86],
        operation(old) {return old + 8},
        divisible_by: 11,
        test(value) { return (value % 11 === 0 ? 4 : 6)},
        items_inspected: 0
    },
    { 
        items : [86, 89, 82],
        operation(old) {return old + 2},
        divisible_by: 7,
        test(value) { return (value % 7 === 0 ? 3 : 0)},
        items_inspected: 0
    },
    { 
        items : [92, 81, 70, 96, 69, 84, 83],
        operation(old) {return old + 4},
        divisible_by: 3,
        test(value) { return (value % 3 === 0 ? 4 : 5)},
        items_inspected: 0
    }
]

{/* part 1 */}
const throwObj = (monkeys) => {
    for (i=1;i<21;i++) {
        monkeys.map(monkey => {
            monkey.items.forEach(item => {
                //monkey inspects
                let worryLevel = monkey.operation(item)
                //monkey bored, divide by 3
                worryLevel = Math.floor(worryLevel/3)
                // test worryLevel to get monkey to throw to
                monkeys[monkey.test(worryLevel)].items.push(worryLevel)
                monkey.items_inspected++
            })
            monkey.items = []
        })
    }
    let monkeyBusiness = (Object.entries(monkeys).map(([key,value])=> value.items_inspected)).sort((a,b) => b - a)
    return monkeyBusiness[0] * monkeyBusiness[1]
}
console.log('Day 11 - part 1: ' + throwObj(_input))

{/* part 2 */}
const throwObj2 = (monkeys) => {
    let allDivisors = monkeys.map((monkey) => monkey.divisible_by).reduce((a,b) => a * b, 1)

    for (i=1;i<10001;i++) {
        monkeys.map(monkey => {
            monkey.items.forEach(item => {
                //monkey inspects
                let worryLevel = monkey.operation(item)
                // got modular arithmetic hint from reddit
                worryLevel = worryLevel % allDivisors
                // test worryLevel to get which monkey to throw to
                monkeys[monkey.test(worryLevel)].items.push(worryLevel)
                monkey.items_inspected++
            })
            monkey.items = []
        })
    }
    let monkeyBusiness = (Object.entries(monkeys).map(([key,value])=> value.items_inspected)).sort((a,b) => b - a)
    return monkeyBusiness[0] * monkeyBusiness[1]
}
console.log('Day 11 - part 2: ' + throwObj2(input))
