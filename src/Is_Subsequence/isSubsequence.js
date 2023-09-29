export function isSubsequence(s, t) {
    for(let i = 0; i < s.length; i++ ){
        const c = s.charAt(i);
        const idx = t.indexOf(c);
        if(idx === -1) return false;
        t = t.substring(idx + 1);
    }

    return true;
}