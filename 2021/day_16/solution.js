{/* Day 16 - 2021 */}

const fs = require("fs")
let input = fs
    .readFileSync(__dirname + "/input", { encoding: "utf8" })

function hexadecimalToBinary(inputHex) {
    const ref = {
        "0" : "0000",
        "1" : "0001",
        "2" : "0010",
        "3" : "0011",
        "4" : "0100",
        "5" : "0101",
        "6" : "0110",
        "7" : "0111",
        "8" : "1000",
        "9" : "1001",
        "A" : "1010",
        "B" : "1011",
        "C" : "1100",
        "D" : "1101",
        "E" : "1110",
        "F" : "1111"
    }
    let binary = ""
    input.split('').map(item => {
        binary += ref[item]
    })
    return binary
}

{/* part 1 */}
function parsePacket(packet, version) {
    if (packet.length > 6){
        let packetVersion = parseInt(packet.split('').splice(0, 3).join(''), 2)
        let packetType = parseInt(packet.split('').splice(3, 3).join(''), 2)
        version += packetVersion
        packet = packet.split('').splice(6, packet.length).join('')
        if (packetType === 4) {
            while (packet.split('')[0] == 1) {
                packet = packet.split('').splice(5, packet.length).join('')
            }
            return parsePacket(packet.split('').splice(5, packet.length).join(''), version)
        } else {
            let lengthTypeId = parseInt(packet.split('').splice(0, 1).join(''), 2)
            if (lengthTypeId === 0) {
                let subPackets = packet.split('').splice(16, packet.length).join('')
                return parsePacket(subPackets, version)
            } else {
                let subPackets = packet.split('').splice(12, packet.length).join('')
                return parsePacket(subPackets, version)
            }
        }
    }
    return version
}
console.log('Day 16 - part 1: ', parsePacket(hexadecimalToBinary(input),0))

{/* part 2 */}
console.log('Day 16 - part 2: ')
