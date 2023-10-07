/**
 *
 * String permutations
 *
 * Problem: Write an algorithm that computes all the permutations
 * of a string and accommodates the following two conditions:
 *
 * - The given string can contain duplicates.
 * - The returned list of permutations should not contain duplicates.
 */

export function permute(str) {
    return permuteString('', str)
}

function permuteString(prefix, str) {
    const perms = new Set()
    const n = str.length

    if (n === 0) perms.add(prefix)
    else {
        for (let i = 0; i < n; i++) {
            permuteString(prefix + str[i],
                str.substring(i + 1, n) + str.substring(0, i))
                .forEach(v => perms.add(v))
        }
    }

    return perms
}