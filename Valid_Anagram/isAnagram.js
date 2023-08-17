export function isAnagram(s, t) {
    if(s.length !== t.length) return false;
    const n = s.length;

    const letters = new Array(26);
    letters.fill(0);

    for(let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[idx]++;
    }

    for(let i = 0; i < n; i++) {
        const idx = t.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[idx]--;

        if(letters[idx] < 0) return false;
    }

    for(let i = 0; i < 26; i++) {
        if(letters[i] > 0) return false;
    }

    return true;
}