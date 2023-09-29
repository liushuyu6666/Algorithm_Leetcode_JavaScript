export function repeatedSubstringPattern(s) {
    let t = (s + s);
    t = t.substring(1, t.length - 1);

    return t.indexOf(s) !== -1;
}