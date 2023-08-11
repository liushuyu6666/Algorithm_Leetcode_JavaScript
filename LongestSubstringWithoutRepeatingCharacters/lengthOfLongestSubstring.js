function lengthOfLongestSubstring(s) {
    const n = s.length, set = new Set();
    let i = 0, j = 0, max = 0;

    while(j < n) {
        const c = s.charAt(j);
        while(set.has(c)) {
            set.delete(s.charAt(i));
            i++;
        }
        set.add(c);
        j++;
        max = Math.max(max, j - i);
    }

    return max;
} // more than 5 mins