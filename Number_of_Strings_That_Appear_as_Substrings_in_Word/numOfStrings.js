export function numOfStrings(patterns, word) {
    let cnt = 0;
    for(const pattern of patterns) {
        if(word.indexOf(pattern) !== -1) cnt++;
    }
    return cnt;
}