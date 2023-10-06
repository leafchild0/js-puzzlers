import { findWord } from './twod-words.js'
import { moveDisks } from './hanoi-towers.js'

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