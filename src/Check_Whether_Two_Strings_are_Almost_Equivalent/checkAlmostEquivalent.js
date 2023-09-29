export function checkAlmostEquivalent(word1, word2) {
    const letters1 = new Array(26);
    letters1.fill(0);
    const letters2 = new Array(26);
    letters2.fill(0);
    
    for(let i = 0; i < word1.length; i++) {
        const idx = word1.charCodeAt(i) - 'a'.charCodeAt(0);
        letters1[idx]++;
    }

    for(let i = 0; i < word2.length; i++) {
        const idx = word2.charCodeAt(i) - 'a'.charCodeAt(0);
        letters2[idx]++;
    }

    for(let i = 0; i < 26; i++) {
        if(Math.abs(letters1[i] - letters2[i]) > 3) return false;
    }

    return true;
}

console.log(checkAlmostEquivalent("aaaa", "bccd"));