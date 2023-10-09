/**
 * Shrinking a string
 * 
 * Problem: Consider a given string containing only letters a-z and whitespaces. 
 * This string contains a lot of consecutive repeated characters. 
 * Write a snippet of code that shrinks this string by counting the consecutive 
 * repeated characters and creating another string that appends each character 
 * and the number of consecutive occurrences. The whitespaces should be copied in the 
 * resulting string as they are (don't shrink the whitespaces). 
 * If the resulting string is not shorter than the given string, 
 * then return the given string.
 */


export function shrinkString(s) {
    let counter = 0
    let result = ''

    for (let i = 0; i < s.length; i++) {

        counter++
        if (s[i] !== ' ') {
            if (i + 1 >= s.length || s[i] !== s[i + 1]) {
                result += s[i] + counter
                counter = 0
            }
        }
        else {
            result += s[i]
            counter = 0

        }
    }

    return result.length < s ? result: s
    
}