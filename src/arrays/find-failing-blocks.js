/**
 Find Falling Blocks:

 Given a block structure that's standing on the ground, some blocks would fall when removing a block from this structure.
 Return the list of blocks that will fall.

 - M * N 2D array represent block structure.
 - k of 1s
 - 1: There's a block
 - 0: No block
 - blocks are attached if two blocks are near to each other left and right or top and bottom.
 - last row is ground
 - if any sequence hit the ground, it's not falling

 =============================
 Input:
 1. 2D array structure
 1 1 1 1 1
 0 0 1 0 1
 0 0 1 0 0
 0 0 1 0 0

 2. removed block from structure
 (0,2)

 =============================
 Output:

 return a list of all falling blocks after removal
 [(0,0),(0,1),(0,3),(0,4),(1,4)]
 **/

export function findFailingBlocks(array, remove) {

    // Let's create a 2dm array for tracking visited
    const visited = Array.from(Array(array.length), () => new Array(array[remove.col].length))
    visited[remove.row][remove.col] = true

    // Go over all possible 4 options, sort if after so it looks pretty
    return [
        ...findFailingBlocksDirection(array, visited, remove.row, remove.col + 1),
        ...findFailingBlocksDirection(array, visited, remove.row, remove.col - 1),
        ...findFailingBlocksDirection(array, visited, remove.row + 1, remove.col),
        ...findFailingBlocksDirection(array, visited, remove.row - 1, remove.col)]
        .sort()
}

function findFailingBlocksDirection(array, visited, row, col) {
    const failingBlocks = new Set()
    return findFailingBlocksInternal(array, visited, failingBlocks, row, col)
}

function findFailingBlocksInternal(array, visited, failingBlocks, row, col) {
    // In case we are out of bounds, return
    if (row < 0 || col < 0 || col > array.length || row > array[row].length) return []
    // If it's already there, skip it
    if (visited[row][col]) return []

    // If row has hit the ground, entire structure to be cleared, set is convenient
    if (row === array.length - 1 && array[row][col] === 1) {
        failingBlocks.clear()
        return []
    }

    if (array[row][col] === 1) {

        visited[row][col] = true
        failingBlocks.add(`${row},${col}`)
    }
    // Check for 1s 4 ways, need to check out of bounds
    // This is essentials the same as array[row + 1][col] && array[row + 1][col] === 1
    if (col + 1 <= array[row].length - 1 && array[row][col + 1] === 1) {
        findFailingBlocksInternal(array, visited, failingBlocks, row, col + 1)
    }
    if (col - 1 >= 0 && array[row][col - 1] === 1) {
        findFailingBlocksInternal(array, visited, failingBlocks, row, col - 1)
    }
    if (row + 1 <= array.length - 1 && array[row + 1][col] === 1) {
        findFailingBlocksInternal(array, visited, failingBlocks, row + 1, col)
    }
    if (row - 1 >= 0 && array[row - 1][col] === 1) {
        findFailingBlocksInternal(array, visited, failingBlocks, row - 1, col)
    }

    return failingBlocks
}