export function firstPalindrome(words) {
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        const reversed = word.split("").reverse().join("");
        if(word.localeCompare(reversed) === 0) return word;
    }

    return "";
}
