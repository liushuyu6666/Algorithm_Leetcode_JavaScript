export function rearrangeCharacters(s, target) {
    const letters = new Array(26);
    letters.fill(0);
    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[code]++;
    }

    const letters2 = new Array(26);
    letters2.fill(0);
    for(let i = 0; i < target.length; i++) {
        const code = target.charCodeAt(i) - 'a'.charCodeAt(0);
        letters2[code]++;
    }

    let min = Number.MAX_VALUE;
    for(let i = 0; i < 26; i++) {
        if(letters2[i] > 0) {
            min = Math.min(min, Math.floor(letters[i] / letters2[i]));
        }
    }

    return min;
}

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"))