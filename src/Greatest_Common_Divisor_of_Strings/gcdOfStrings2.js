function gcdOfStrings2(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";

    const len = calGCD(str1.length, str2.length);

    return str1.substring(0, len);
};

const calGCD = (a, b) => b === 0 ? a : calGCD(b, a % b); 