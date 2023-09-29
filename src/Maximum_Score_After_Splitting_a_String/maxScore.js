export function maxScore(s) {
    // Calculate the initial score - the score we split the string at index 1.
    let score = s.charAt(0) === '0' ? 1 : 0;
    for(let i = 1; i < s.length; i++) {
        if(s.charAt(i) === '1') {
            score++;
        }
    }

    let ans = score;
    for(let i = 1; i < s.length - 1; i++) {
        if(s.charAt(i) === '0') {
            score++;
            ans = Math.max(ans, score);
        } else {
            score--;
        }
    }

    return ans;
}