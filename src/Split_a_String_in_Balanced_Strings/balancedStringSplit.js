export function balancedStringSplit(s) {
    let sum = 0, cnt = 0;

    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i);

        if(c === 'L') {
            sum++;
        } else {
            sum--;
        }

        if(sum === 0) cnt++;
    }

    return cnt;
}