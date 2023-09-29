export function makeGood(s) {
    const ss = purify(s, 0);
    return ss;
}

function purify(s, idx) {
    idx = Math.max(idx, 0);
    
    if(idx > s.length - 2) return s;

    if(isPair(s.charAt(idx), s.charAt(idx + 1))) {
        s = s.substring(0, idx) + s.substring(idx + 2);  // abBAcC 
        s = purify(s, idx - 1);
    } else {
        s = purify(s, idx + 1);
    }

    return s;
}

function isPair(letter1, letter2) {
    if(Math.abs(letter1.charCodeAt(0) - letter2.charCodeAt(0)) === Math.abs('aA'.charCodeAt(0) - 'aA'.charCodeAt(1))) return true;
    return false;
}

console.log(makeGood("leEeetcode"));