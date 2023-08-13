export function reverseVowels(s) {
    const n = s.length;
    let l = 0, r = n - 1;
    while(l < r) {
        while(!isVowel(s.charAt(l)) && l < r) {
            l++;
        }
        while(!isVowel(s.charAt(r)) && l < r) {
            r--;
        }
        if(l < r) {
            s = replaceCharacters(s, l, r);
            l++;
            r--;
        }
    }

    return s;
}

function isVowel(c) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return set.has(c);
}

function replaceCharacters(s, l, r) {
    const lc = s.charAt(l);
    const rc = s.charAt(r);

    return s.substring(0, l) + rc + s.substring(l + 1, r) + lc +s.substring(r + 1);
}