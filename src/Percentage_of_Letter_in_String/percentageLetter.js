export function percentageLetter(s, letter) {
    let cnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === letter) {
            cnt++;
        }
    }

    return Math.floor(cnt * 100 / s.length);
}