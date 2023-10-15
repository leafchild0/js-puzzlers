/**
 * Sorting a stack in place
 *
 * Problem: Consider you've been given an unsorted stack.
 * Write a snippet of code that sorts the stack in place.
 * Note that a variation of this problem will explicitly mention that you
 * cannot use any repetitive statements, such as for, while, and so on.
 */

export function sortStackInPlace(stack) {

    if (stack.length === 0) return []

    const top = stack.pop()

    // Apply same logic to left values
    sortStackInPlace(stack)

    // Actually sort stack
    sortInsert(stack, top)

    return stack
}

function sortInsert(stack, elem) {
    // If elem is greater than anything in the stack, ideal option
    if (stack.length === 0 || elem > stack.at(-1)) {
        stack.push(elem)
        return
    }

    // Similar to original method, extract top to apply it later, sort everything else
    const top = stack.pop()

    sortInsert(stack, elem)

    stack.push(top)
}