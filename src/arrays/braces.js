/**
 * Stack of curly braces
 *
 * Problem: Consider you've been given a String containing curly braces.
 * Write a snippet of code that returns true if there are matching pairs of curly braces.
 * If we can find a closing curly brace for an opening one in the proper order,
 * then we can say that we have a matching pair.
 * For example, a string containing matching pairs looks like this: {{{}}}{}{{}}.
 */

export function bracesMatching(bracesStr) {
    const braces = []
    const len = bracesStr.length

    for (let i = 0; i < len; i++) {
        if (bracesStr[i] === '{') {
            braces.push(braces[i])
        }
        else if (bracesStr[i] === '}') {
            // If empty, there is no closing brace
            if (braces.length === 0) return false
            // Pop from array
            braces.pop()
        }
        else return false
    }

    return braces.length === 0
}