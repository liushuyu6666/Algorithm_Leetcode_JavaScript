function gcdOfStrings1(str1, str2) {
    const [repeatedSubstring1, times1] = getRepeatedSubstring(str1);
    const [repeatedSubstring2, times2] = getRepeatedSubstring(str2);

    if(repeatedSubstring1 !== repeatedSubstring2) return "";

    const gcd = calGCD(times1, times2);

    return repeatedSubstring1.repeat(gcd);

}

// Euclidean Algorithm
const calGCD = (a, b) => b === 0 ? a : calGCD(b, a % b);

function getRepeatedSubstring(s) {
    let ss = s + s;
    ss = ss.substring(1, ss.length - 1);

    let times = 0, repeatedIdx = ss.indexOf(s, 0);
    while(repeatedIdx !== -1) {
        times++;
        ss = ss.substring(repeatedIdx + 1);
        repeatedIdx = ss.indexOf(s, 0);
    }

    const lengthOfRepeat = Math.floor(s.length / (times + 1));
    return [s.substring(0, lengthOfRepeat), times + 1];
}
