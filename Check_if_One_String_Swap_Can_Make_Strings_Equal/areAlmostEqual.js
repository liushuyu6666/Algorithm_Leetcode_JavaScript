export function areAlmostEqual(s1, s2) {
    let cnt = 0, diff1 = '', diff2 = '';
    for(let i = 0; i < s1.length; i++) {
        const c1 = s1.charAt(i);
        const c2 = s2.charAt(i);

        if(c1 !== c2) {
            cnt++;
            if(cnt === 1) {
                // first pair, store them
                diff1 = c1;
                diff2 = c2;
            } else if(cnt === 2) {
                // second pair, compare them
                if(diff1 === c2 && diff2 === c1) continue;
                else return false;
            } else return false; // third pair, return false
        }
    }

    if(cnt === 1) return false;
    return true;
}