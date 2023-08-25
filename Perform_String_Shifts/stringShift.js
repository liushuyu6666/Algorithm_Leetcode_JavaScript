function stringShift(s, shift) {
    let str = s;
    for(const [dir, amt] of shift) {
        if(dir === 1) {
            str = rightShift(str, amt);
        } else {
            str = leftShift(str, amt);
        }
    }

    return str
}

function leftShift(s, n) {
    n = n % s.length;
    return s.substring(n) + s.substring(0, n);
}

function rightShift(s, n) {
    n = n % s.length;
    return s.substring(s.length - n) + s.substring(0, s.length - n);
}

console.log(stringShift("abc", [[0,4]]))