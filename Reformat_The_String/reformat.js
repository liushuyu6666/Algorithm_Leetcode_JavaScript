export function reformat(s) {
    const digits = [], chars = [];
    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);

        if(code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
            // it is a digit
            digits.push(s.charAt(i));
        } else {
            // it is a char
            chars.push(s.charAt(i));
        }
    }

    if(Math.abs(digits.length - chars.length) >= 2) {
        return "";
    }

    let str = "";
    while(digits.length > 0 && chars.length > 0) {
        str += `${digits.pop()}${chars.pop()}`;
    }
    if(digits.length > 0) {
        return str + digits.pop();
    } else if(chars.length > 0) {
        return chars.pop() + str;
    }

    return str;
}

console.log(reformat("a0b1c2"))