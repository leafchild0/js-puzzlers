/**
 * Checking for duplicates
 *
 * Problem: Consider that you've been given an array of integers, arr.
 * Write several solutions that return true if this array contains duplicates.
 */

export function haveDuplicates(array) {
    // This is O(n) time and same for space
    return new Set(array).size !== array.length
}