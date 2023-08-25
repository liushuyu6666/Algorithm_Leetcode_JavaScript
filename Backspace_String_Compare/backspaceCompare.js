export function backspaceCompare(s, t) {
    const ss = backspaceString(s);
    const tt = backspaceString(t);

    return ss === tt;
}

function backspaceString(s) {
    let ss = "";
    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if(c === '#') {
            ss = ss.substring(0, ss.length - 1);
        } else {
            ss += c;
        }
    }

    return ss;
}