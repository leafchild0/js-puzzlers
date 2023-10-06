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