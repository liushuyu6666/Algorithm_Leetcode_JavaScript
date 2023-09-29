export function findTheDifference(s, t) {
    const letters = new Array(26);
    letters.fill(0);

    for(let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[ascii]++;
    }

    for(let i = 0; i < t.length; i++) {
        const ascii = t.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[ascii]--;
        
        if(letters[ascii] < 0) return t.charAt(i);
    }
}