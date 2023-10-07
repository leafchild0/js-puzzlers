/**
 * Find a common divider of two numbers
 * Greatest common divider is a biggest number that 2 numbers can be divided to
 * For example for 9 and 3, biggest divider is 3, but for 12 and 13 it's 1
 * @param x - first number
 * @param y - second number
 * @returns divider number
 */
export function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
        const t = y;
        y = x % y;
        x = t;
    }
    return x;
}