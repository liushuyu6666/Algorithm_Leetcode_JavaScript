export function checkOnesSegment(s) {
    // Find the first '0'
    let i = 0;
    while(i < s.length && s.charAt(i) === '1') {
        i++;
    }

    // No '0' in the string
    if(i === s.length) return true;

    while(i < s.length) {
        if(s.charAt(i) === '1') return false;
        i++;
    }
    return true;
}