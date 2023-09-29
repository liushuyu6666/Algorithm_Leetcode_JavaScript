export function largestOddNumber(num) {
    for(let i = num.length - 1; i >= 0; i--) {
        if(isOdd(num.charAt(i))) {
            return num.substring(0, i + 1);
        }
    }
    return "";
}

function isOdd(digit) {
    const d = digit.charCodeAt(0) - '0'.charCodeAt(0);
    return d % 2 === 1;
}
