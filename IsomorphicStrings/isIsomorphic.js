export function isIsomorphic(s, t) {
    const str1 = convertToStandardIsomorphic(s);
    const str2 = convertToStandardIsomorphic(t);

    return str1.localeCompare(str2) === 0 ? true : false;
}

function convertToStandardIsomorphic(s) {
    const n = s.length;
    const map = new Map();
    let charCode = 'a'.charCodeAt(0);
    let str = "";

    for(let i = 0; i < n; i++) {
        const c = s.charAt(i);
        if(map.has(c)) {
            str += map.get(c);
        } else {
            const newCode = String.fromCharCode(charCode++)
            map.set(c, newCode);
            str += newCode;
        }
    }

    return str;
}