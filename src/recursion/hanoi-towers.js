/**
 * Tower of Hanoi
 *
 * Problem: The Tower of Hanoi is a problem with three rods (A, B, and C) and n disks.
 * Initially, all the disks are placed in ascending order on a single rod (the largest disk is on the bottom (disk n),
 * a smaller one sitting on it (n-1), and so on (n-2, n-3, ...) until the smallest disk is on the top (disk 1).
 * The aim is to move all the disks from this rod to another rod while respecting the following rules:
 *
 * Only one disk can be moved at a time.
 * A move means to slide the upper disk from one rod to another rod.
 * A disk cannot be placed on top of a smaller disk.
 */

/**
 * Move disks recursively between 3 items
 * @param disks - amount of disks
 * @param origin - origin tower
 * @param target - target tower
 * @param intermediate - intermediate tower
 */
export function moveDisks(disks, origin, target, intermediate) {
    if (disks <= 0) return

    if (disks === 1) {
        console.log(`Move disk 1 from rod ${origin} to rod ${target}`)
        return
    }

    // move top disks - 1 disks from origin to intermediate,
    // using target as an intermediate
    moveDisks(disks - 1, origin, intermediate, target)

    console.log(`Move disk ${disks} from rod ${origin} to rod ${target}`)

    // move top disks - 1 disks from intermediate to target,
    // using origin as an intermediate
    moveDisks(disks - 1, intermediate, target, origin)
}