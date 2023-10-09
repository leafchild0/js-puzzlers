/**
 * Longest distinct substring
 *
 * Problem: Consider you've been given a string, str.
 * The accepted characters of str belong to the extended ASCII table (256 characters).
 * Write a snippet of code that finds the longest substring of str containing distinct characters.
 */

export function longestDistinctSub(str) {
    const chars = new Array(256).fill(false)
    let left = 0
    let right = 0

    for (let wr = 0, wl = 0; wr < str.length; wr++) {

        if (chars[str.charAt(wr)]) {
            // Remove everything until current
            while (str.charAt(wl) !== str.charAt(wr)) {
                chars[str.charAt(wl)] = false
                wl++
            }
            wl++
        }
        else {
            // This is new, lets add it
            chars[str.charAt(wr)] = true

            if ((right - left) < (wr - wl)) {
                left = wl
                right = wr
            }
        }


    }
    return str.substring(left, right + 1)
}