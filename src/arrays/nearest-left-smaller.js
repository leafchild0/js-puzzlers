/**
 * Nearest left smaller number
 *
 * Problem: Consider you've been given an array of integers, arr.
 * Write a snippet of code that finds and prints the nearest smaller number for every
 * element so that the smaller element is on left-hand side.
 */

export function nearestLeftSmaller(array) {
    const stack = []
    let result = ''
    for (let i = 0; i < array.length; i++) {
        // If element is greater, it's been traversed
        while (stack.length !== 0 && stack.at(-1) >= array[i]) stack.pop()

        // No elements, means it's smaller elem, otherwise, print it
        if (stack.length === 0) result += '_, '
        else result += stack.at(-1) + ', '

        stack.push(array[i])
    }

    console.log(result)
}