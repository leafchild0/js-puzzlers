import { findWord } from './arrays/twod-words.js'
import { moveDisks } from './recursion/hanoi-towers.js'
import { findMagicNumber } from './recursion/magic-index.js'
import { gcd } from './common-divider.js'
import { permute } from './recursion/string-permutations.js'
import { isOneEditAway } from './strings/one-edit-away.js'
import { shrinkString } from './strings/shrink-string.js'
import { pairs } from './arrays/pairs.js'
import { haveDuplicates } from './arrays/duplicates.js'
import { longestDistinctSub } from './strings/longest-distinct-sub.js'
import { bracesMatching } from './arrays/braces.js'
import { sortStackInPlace } from './arrays/sort-stack-in-place.js'
import { nearestLeftSmaller } from './arrays/nearest-left-smaller.js'
import { findFailingBlocks } from './arrays/find-failing-blocks.js'

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

console.log(Array.from(permute('ab')).join(' '))
console.log(Array.from(permute('abc')).join(' '))
console.log(Array.from(permute('abcd')).join(' '))

console.assert(isOneEditAway('tank', 'tanc') === true)
console.assert(isOneEditAway('tank', 'tankist') === false)

console.log(shrinkString('abbb vvvv s rttt rr eeee f'))

console.log(pairs([-5, -2, 5, 4, 3, 7, 2, 1, -1, -2, 15, 6, 12, -4, 3], 10))

console.assert(haveDuplicates([1, 2, 3, 4, 5, 1]) === true)
console.assert(haveDuplicates([1, 2, 3, 4, 5, 6]) === false)

console.assert(longestDistinctSub('asdjqjdiosijjj') === 'qjdios')
console.assert(longestDistinctSub('abcdefjaidjioewfjwdc') === 'bcdefjai')

console.assert(bracesMatching('{{{}}}') === true)
console.assert(bracesMatching('{{{{}}}') === false)

console.log(sortStackInPlace([8, 6, 3, 1, 4, 4]))

console.assert(nearestLeftSmaller([4, 1, 8, 3, 8, 2, 6, 7, 4, 9]) === '_, _, 1, 1, 3, 1, 2, 6, 2, 4,')

const array = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [0 ,0, 1, 0, 0]
]

console.log(findFailingBlocks(array, {row: 0, col: 2}))