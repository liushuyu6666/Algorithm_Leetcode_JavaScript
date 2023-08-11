export function titleToNumber(columnTitle) {
    let sum = 0;

    for(let i = 0; i < columnTitle.length; i++) {
        sum = sum * 26;
        const code = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        sum += code;
    }

    return sum;
} 