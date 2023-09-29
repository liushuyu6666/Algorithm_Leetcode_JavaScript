export function maximumValue(strs) {
    let max = 0;
    for(const word of strs) {
        let i = 0, sum = 0;
        while(i < word.length) {
            if(word.charCodeAt(i) >= '09'.charCodeAt(0) && word.charAt(i) <= '09'.charCodeAt(1)) {
                // If the character is a digit
                sum = sum * 10 + word.charCodeAt(i) - '0'.charCodeAt(0);
            } else {
                sum = word.length;
                break;
            }
            i++;
        }
        max = Math.max(max, sum);
    }

    return max;
}