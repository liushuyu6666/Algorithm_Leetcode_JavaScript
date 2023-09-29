export function replaceSpaces(S, length) {
    let str = "";
    for(let i = 0; i < length; i++) {
        const c = S.charAt(i);
        
        if(c === " ") {
            str += "%20";
        } else {
            str += c;
        }
    }

    return str;
}