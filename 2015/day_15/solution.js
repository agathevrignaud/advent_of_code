{/* Day 15 - 2021 */}

const fs = require("fs")
let ingredients = {}
fs.readFileSync(__dirname + "/input", { encoding: "utf8" })
    .split(/\r?\n/)
    .map(x => {
    let parsedIngredients = x.match(/(\w+):.+ (.?\d),.+ (.?\d),.+ (.?\d),.+ (.?\d), .+ (.?\d)/)
    ingredients[parsedIngredients[1]] = {
        capacity: parsedIngredients[2],
        durability: parsedIngredients[3],
        flavor: parsedIngredients[4],
        texture: parsedIngredients[5],
        calories: parsedIngredients[6]
    }
})

{/* part 1 */}
function calculateCookieScore(list) {
    let properties = { capacity: 0, durability: 0, flavor: 0, texture: 0, calories: 0 }
    let teaSpoons = { Sprinkles: list[0], Butterscotch: list[1], Chocolate:  list[2], Candy: list[3]}

    for (const [key1] of Object.entries(ingredients)) {
        for (const [key2] of Object.entries(properties)) {
            properties[key2] += teaSpoons[key1] * ingredients[key1][key2]
        }
    }

    let score = properties.capacity * properties.durability * properties.flavor * properties.texture
    return score
}

console.log('Day 15 - part 1: ')

// résultat [ 21367368, 1766400 ]


{/* part 2 */}
console.log('Day 15 - part 2: ')

