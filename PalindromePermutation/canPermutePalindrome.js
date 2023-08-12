export function canPermutePalindrome(s) {
    const letters = new Array(26);
    letters.fill(false);
    let cnt = 0;

    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if(letters[code]) {
            letters[code] = false;
            cnt--;
        } else {
            letters[code] = true;
            cnt++;
        }
    }

    if(s.length % 2 === 0) {
        return cnt === 0 ? true : false;
    } else {
        return cnt <= 1 ? true : false;   
    }
}