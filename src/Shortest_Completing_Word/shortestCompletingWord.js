export function shortestCompletingWord(licensePlate, words) {
    const arr = (licensePlate.match(/[a-zA-Z]+/g) || []);
    const l = arr.join('');
    const str = l.toLowerCase();

    const cnt = new Array(26);
    cnt.fill(0);
    const len = str.length;
    for(let i = 0; i < len; i++) {
        const code = str.charCodeAt(i) - 'a'.charCodeAt(0);
        cnt[code]++;
    }

    let ans = "";
    for(const word of words) {
        const tempCnt = [...cnt];
        let num = 0;
        for(let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(tempCnt[code] > 0) {
                tempCnt[code]--;
                num++;
            }
            if(num === len) {
                if(ans.length === 0 || ans.length > word.length) {
                    ans = word;
                }
            }
        }
    }

    return ans;
}