import { findWord } from './twod-words.js'
import { moveDisks } from './hanoi-towers.js'
import { findMagicNumber } from './magic-index.js'
import { gcd } from './common-divider.js'

const twoDarray = [
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["i", "j", "k", "l", "m", "n", "o", "p", "q"],
    ["r", "s", "t", "u", "v", "w", "x", "y", "z"],
]

console.assert(findWord(twoDarray, "abc") === true);
console.assert(findWord(twoDarray, "emv") === true);
console.assert(findWord(twoDarray, "oxyzq") === true);
console.assert(findWord(twoDarray, "oxyzp") === false);
console.assert(findWord(twoDarray, "dfojdosifj") === false);


moveDisks(4, 'a', 'c', 'b')

console.assert(findMagicNumber([-5, -4, -2, 0, 1, 2, 3, 5, 6, 7, 9, 11, 13, 20, 22, 24, 25]) === 11)
console.assert(findMagicNumber([1, 4, 4, 4, 5, 5, 6, 6, 6, 11, 12, 12, 12, 15, 17, 20, 21]) === 5)

console.assert(gcd(10, 30) === 10)
console.assert(gcd(9, 15) === 3)