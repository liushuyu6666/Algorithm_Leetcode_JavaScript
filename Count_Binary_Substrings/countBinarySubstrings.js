export function countBinarySubstrings(s) {
    const list = (s.match(/(0+)|(1+)/g) || []).map(t => t.length);

    let sum = 0;
    for(let i = 1; i < list.length; i++) {
        sum += Math.min(list[i], list[i - 1]);
    }

    return sum;
}