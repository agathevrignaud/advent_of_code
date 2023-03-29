{/* Day 11 - 2022 */}

const fs = require("fs");

let _input = [
    { 
        items : [79, 98],
        operation(old) {return old * 19},
        test(value) { return (value % 23 === 0 ? 2 : 3)},
        items_inspected: 0
    },
    { 
        items : [54, 65, 75, 74],
        operation(old) {return old + 6},
        test(value) { return (value % 19 === 0 ? 2 : 0)},
        items_inspected: 0
    },
    { 
        items : [79, 60, 97],
        operation(old) {return old * old},
        test(value) { return (value % 13 === 0 ? 1 : 3)},
        items_inspected: 0
    },
    { 
        items : [74],
        operation(old) {return old + 3},
        test(value) { return (value % 17 === 0 ? 0 : 1)},
        items_inspected: 0
    }
]

let input = [
    { 
        items : [64],
        operation(old) {return old * 7},
        test(value) { return (value % 13 === 0 ? 1 : 3)},
        items_inspected: 0
    },
    { 
        items : [60, 84, 84, 65],
        operation(old) {return old + 7},
        test(value) { return (value % 19 === 0 ? 2 : 7)},
        items_inspected: 0
    },
    { 
        items : [52, 67, 74, 88, 51, 61],
        operation(old) {return old * 3},
        test(value) { return (value % 5 === 0 ? 5 : 7)},
        items_inspected: 0
    },
    { 
        items : [67, 72],
        operation(old) {return old + 3},
        test(value) { return (value % 2 === 0 ? 1 : 2)},
        items_inspected: 0
    },
    { 
        items : [80, 79, 58, 77, 68, 74, 98, 64],
        operation(old) {return old * old},
        test(value) { return (value % 17 === 0 ? 6 : 0)},
        items_inspected: 0
    },
    { 
        items : [62, 53, 61, 89, 86],
        operation(old) {return old + 8},
        test(value) { return (value % 11 === 0 ? 4 : 6)},
        items_inspected: 0
    },
    { 
        items : [86, 89, 82],
        operation(old) {return old + 2},
        test(value) { return (value % 7 === 0 ? 3 : 0)},
        items_inspected: 0
    },
    { 
        items : [92, 81, 70, 96, 69, 84, 83],
        operation(old) {return old + 4},
        test(value) { return (value % 3 === 0 ? 4 : 5)},
        items_inspected: 0
    }
]


{/* part 1 */}
const throwObj = (monkeys) => {
    for (i=1;i<21;i++) {
        monkeys.map(monkey => {
            let newItemList = []
            monkey.items.map(item => {
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
console.log('Day 11 - part 1: ' + throwObj(input))

{/* part 2 */}
const throwObj2 = (monkeys) => {
    for (i=1;i<21;i++) {
        monkeys.map(monkey => {
            let newItemList = []
            monkey.items.map(item => {
                //monkey inspects
                let worryLevel = monkey.operation(item)
                // test worryLevel to get monkey to throw to
                monkeys[monkey.test(worryLevel)].items.push(worryLevel)
                monkey.items_inspected++
            })
            monkey.items = []
        })
        
    }
    let monkeyBusiness = (Object.entries(monkeys).map(([key,value])=> value.items_inspected)).sort((a,b) => b - a)
    console.log("obtenu     : " + (Object.entries(monkeys).map(([key,value])=> value.items_inspected)))
    console.log("attendu    : 99,97,8,103")
    return monkeyBusiness[0] * monkeyBusiness[1]
}
console.log('Day 11 - part 2: ' + throwObj2(_input))
