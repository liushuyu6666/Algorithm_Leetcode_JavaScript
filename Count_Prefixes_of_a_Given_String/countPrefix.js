export function countPrefixes(words, s) {
    let cnt = 0;
    for(const word of words) {
        if(s.indexOf(word) === 0) cnt++;
    }
    return cnt;
}