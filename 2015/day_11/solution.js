{/* Day 11 - 2021 */}

let pwd = 'hxbxwxba' // abcdefgh
let isValid = false

while (!isValid) {
    // incrémente la lettre où on est rendu + check les règles si okay on rend le mdp

    pwd = String.fromCharCode(pwd.charCodeAt(pwd.length-1) + 1 == '{' ? pwd.charCodeAt(pwd.length-1) == 'a' : pwd.charCodeAt(pwd.length-1) + 1 )
    console.log(pwd)
    /*
    rule one : pwd.match((.)\1*).length > 0

    rule two : !pwd.includes(['i','o','l'])

    rule three

    if (les conditions) {
        isValid = true
    }
     */
}

{/* part 1 */}
console.log('Day 11 - part 1: ')

{/* part 2 */}
console.log('Day 11 - part 2: ')