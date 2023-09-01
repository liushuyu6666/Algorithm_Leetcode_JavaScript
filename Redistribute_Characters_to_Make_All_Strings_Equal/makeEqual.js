export function makeEqual(words) {
    const letters = new Array(26);
    letters.fill(0);

    const str = words.join('');
    const n = words.length;

    for(let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[index]++;
    }

    for(let i = 0; i < 26; i++) {
        if(letters[i] % n !== 0) {
            return false;
        }
    }

    return true;
}
