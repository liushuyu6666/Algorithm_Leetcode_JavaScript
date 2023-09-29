export function romanToInt(s) {
    const n = s.length;
    let sum = 0;

    for(let i = 0; i < n; i++){
        const c = s.charAt(i);
        sum += convertToInt(c);
        
        if((c === 'V' || c === 'X') && i > 0 && s.charAt(i - 1) === 'I') {
            sum -= 2;
        } else if((c === 'L' || c === 'C') && i > 0 && s.charAt(i - 1) === 'X') {
            sum -= 20;
        } else if((c === 'D' || c === 'M') && i > 0 && s.charAt(i - 1) === 'C') {
            sum -= 200;
        }
    }

    return sum;
}

function convertToInt(c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            throw new Error("Invalid character");
    }
}