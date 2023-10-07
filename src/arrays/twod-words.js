/**
 * *** Play with array
 *
 * Given two-dimensional array with random chars in it
 * Write a function that will find a sequence of chars/word in that array
 * Lets call 2 or more chars a sequence if they are connected as neighbors
 * a.k.a snake game, but in this simplified case just find needed word and return
 * boolean result
 *
 * For simplicity, example of the array:
 * [
 *     ["a", "b", "c", "d", "e", "f", "g", "h"],
 *     ["i", "j", "k", "l", "m", "n", "o", "p", "q"],
 *     ["r", "s", "t", "u", "v", "w", "x", "y", "z"],
 * ]
 *
 * Please provide your best solution and share asymptote function (Big O)
 */


function findFirstCharacter(data, char) {
    let pos
    for (let i = 0; i < data.length; i++) {
        const foundCharIndex = data[i].findIndex((c) => c === char)

        // Find first letter and get its coordinates
        if (foundCharIndex !== -1) {
            pos = {x: i, y: foundCharIndex}
            break
        }
    }
    return pos
}

function isMovePossible(pos, move) {
    return pos > move
}

function isFoundChar(source, target) {
    return source === target
}

/**
 * Finds sequence of chars in the passed array
 * @param data - 2-dimensional array
 * @param word - word to search for
 * @returns {boolean} result if it's fully found
 */
export function findWord(data, word) {
    const chars = word.split('')
    let pos = findFirstCharacter(data, chars[0])

    if (pos) {
        for (let i = 1; i < chars.length; i++) {
            let char = chars[i]
            // Find all other characters using 1 move in any direction
            if (isMovePossible(data[pos.x].length, pos.y + 1) && isFoundChar(data[pos.x][pos.y + 1], char)) {
                pos.y++
            } else if (isMovePossible(pos.y - 1, 0) && isFoundChar(data[pos.x][pos.y - 1], char)) {
                pos.y--
            } else if (isMovePossible(data.length, pos.x + 1) && isFoundChar(data[pos.x + 1][pos.y], char)) {
                pos.x++
            } else if (isMovePossible(pos.x - 1, 0) && isFoundChar(data[pos.x - 1][pos.y], char)) {
                pos.x--
            } else return false
        }
        console.log('Found word ' + word)
        return true
    }
    return false
}