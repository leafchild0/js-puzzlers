/**
 * Pairs
 *
 * Problem: Consider an array of integers (positive and negative), m.
 * Write a snippet of code that finds all the pairs of integers whose sum is equal to a given number, k.
 */

export function pairs(array, k) {
    const result = []
    let l = 0
    let r = array.length - 1
    array.sort((a, b) => a - b)

    while (l < r) {
        let sum = array[l] + array[r]

        if (sum === k) {
            result.push(`(${array[l]} ${array[r]})`)
            l++
            r--
        }
        else if (sum < k) l++
        else if (sum > k) r--
    }

    return result

}