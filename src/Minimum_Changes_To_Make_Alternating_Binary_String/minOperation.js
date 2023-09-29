export function minOperation(s) {
    let left = 0, right = 0;
    for(let i = 0; i < s.length; i++) {
        const curr = s.charAt(i);

        if(i % 2 === 0) {
            // At an even position.
            if(curr !== '0') {
                // This position should be 0 for a left alternating binary string.
                left++;
            } else {
                // This position should be 1 for a right alternating binary string.
                right++;
            }
        } else {
            // At an odd position.
            if(curr !== '1') {
                // This position should be 1 for a left alternating binary string.
                left++;
            } else {
                // This position should be 0 for a right alternating binary string.
                right++;
            }
        }
    }

    return Math.min(left, right);
}
