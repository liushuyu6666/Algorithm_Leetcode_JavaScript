export function closetTarget(words, target, startIndex) {
    const set = new Set();
    for(let i = 0; i < words.length; i++) {
        if(words[i] === target) {
            set.add(i);
        }
    }
    
    if(set.size === 0) return -1;

    let ans = Number.MAX_VALUE;
    for(const idx of set) {
        ans = Math.min(ans, getMinimumDistance(startIndex, idx, words.length));
    }

    return ans;
}

// [0, 1, 2, ... , i - 1, i, i + 1, .... , j - 1, j, j + 1, ..., n]
// dist1 = Math.abs(j - i);
// dist2 = n - dist1;
function getMinimumDistance(i, j, n) {
    const dist1 = Math.abs(j - i);
    const dist2 = n - dist1;
    return Math.min(dist1, dist2);
}