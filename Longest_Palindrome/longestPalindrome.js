export function longestPalindrome(s) {
    const letters = new Array(52);
    letters.fill(0);

    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if(code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
            letters[code - 'a'.charCodeAt(0)]++;
        } else {
            letters[code - 'A'.charCodeAt(0) + 26]++;
        }
    }

    let sum = 0, hasOdd = 0;
    for(const letter of letters) {
        sum += Math.floor(letter / 2);
        if(letter % 2 === 1) hasOdd = 1;
    }

    return sum * 2 + hasOdd;
}