export function findTheLongestBalancedSubstring(s) {
    // Find the first 0
    let i = 0;
    while(i < s.length && s.charAt(i) === '1') {
        i++;
    }

    // Starts from the first 0
    let ones = 0, zeros = 0, ans = 0;
    while(i < s.length) {
        if(s.charAt(i) === '0' && ones === 0) {
            zeros++;
        } else if(s.charAt(i) === '1') {
            ones++;
        } else {
            // Reach at a new group, where the current character is 0 but `ones` is not 0
            ans = Math.max(ans, Math.min(ones, zeros) * 2);
            zeros = 1;
            ones = 0;
        }
        i++;
    }
    ans = Math.max(ans, Math.min(ones, zeros) * 2);

    return ans;
} 
