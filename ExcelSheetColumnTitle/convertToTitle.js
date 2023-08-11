export function convertToTitle(columnNumber) {
    let num = columnNumber;
    let str = "";

    do {
        num -= 1;
        let char = String.fromCharCode((num % 26) + 'A'.charCodeAt(0));
        str = char + str;
        num = Math.floor(num / 26);
    } while(num > 0);

    return str;
};