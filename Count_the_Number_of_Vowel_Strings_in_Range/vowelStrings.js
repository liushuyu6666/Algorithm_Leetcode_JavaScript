export function vowelStrings(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let cnt = 0;
    for(let i = left; i < Math.min(right + 1, words.length); i++) {
        const word = words[i];
        if(vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
            cnt++;
        }
    }
    return cnt;
}