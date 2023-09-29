export function makeFancyString(s) {
    let str = s.substring(0 ,2);

    for(let i = 2; i < s.length; i++) {
        const char = s.charAt(i);
        if(str.charAt(str.length - 1) === str.charAt(str.length - 2) && str.charAt(str.length - 1) === char) {
            continue;
        } else {
            str += char;
        }
    }

    return str;
}