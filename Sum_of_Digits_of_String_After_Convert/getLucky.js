export function getLucky(s, k) {
    let digits = convertToDigits(s);

    while(k > 0 && digits.length > 1) {
        digits = transform(digits);
        k--;
    }

    return parseInt(digits);
}

function convertToDigits(s) {
    let digits = '';
    for(let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        digits += index;
    }
    return digits;
}

function transform(digits) {
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        const num = digits.charCodeAt(i) - '0'.charCodeAt(0);
        sum += num;
    }
    return sum + '';
}
