export function main(s, k) {
    let str = [];
    while(s.length > 0) {
        str.push(s.substring(0, 2 * k));
        s = s.substring(2 * k);
    }

    const re = str.map(w => reverseSubstring(w, 0, k))

    return re.join('');
}

function reverseSubstring(s, startIdx, endIdx) {
    const f = s.substring(startIdx, endIdx);
    const l = s.substring(endIdx);

    return f.split('').reverse().join('') + l;
}