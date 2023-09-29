export function countConsistentStrings(allowed, words) {
    const letters = new Array(26);
    letters.fill(false);

    for(let i = 0; i < allowed.length; i++) {
        const code = allowed.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[code] = true;
    }

    let cnt = words.length;
    for(const word of words) {
        for(let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(!letters[code]) {
                cnt -= 1;
                break;
            }
        }
    }

    return cnt;
}
