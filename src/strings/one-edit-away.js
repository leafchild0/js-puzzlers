/**
 * One edit away
 *
 * Problem: Consider two given strings, q and p.
 * Write a snippet of code that determines whether we can obtain two identical strings
 * by performing a single edit in q or p. More precisely, we can insert, remove, or replace
 * a single character in q or in p, and q will become equal to p.
 */

export function isOneEditAway(q, p) {

    // If difference is more than 1 character, it's false
    if (Math.abs(q.length - p.length) > 1) return false

    const shorter = q.length > p.length ? p : q
    const longer = q.length < p.length ? q : p
    let is = 0
    let il = 0
    let marker = false

    while (is < shorter.length && il < longer.length) {
        if (shorter[is] !== longer[il]) {
            // First difference is found
            // So on second, it's false
            if (marker) return false
            marker = true

            if (shorter.length === longer.length) is++
        }
        else is++

        // Increase counter no matter what
        il++
    }

    return true

}