export function isFlippedString(s1, s2) {
    if(s1.length === 0 && s2.length === 0) return true;
    if(s2.length === 0) return false;
    const s = s1 + s1;
    return s.indexOf(s2) !== -1;
}