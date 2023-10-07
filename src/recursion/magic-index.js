/**
 * Magic index
 *
 * Problem: Consider a sorted array of n elements that allows duplicates.
 * An index k is magic if array[k] = k.
 * Write a recursive algorithm that finds the first magic index
 */

export function findMagicNumber(array) {
    return findNumber(array, 0, array.length - 1)
}

function findNumber(array, start, end) {
    // Return invalid index
    if (start > end) return -1

    const mid = Math.round((start + end) / 2)
    const current = array[mid]

    // In case this is the magic number
    if (current === mid) return mid

    // Search left
    const left = findNumber(array, start, Math.min(mid - 1, current))
    if (left >= 0) return left

    // Search right
    return findNumber(array, Math.max(mid + 1, current), end)
}