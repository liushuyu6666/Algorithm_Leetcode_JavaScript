export function countVowelSubstrings(word) {
    let i = 0, cnt = 0;
    const set = new Set();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    while(i <= word.length - 5) {
        if(!vowels.includes(word.charAt(i))) {
            // left bound is a consonant
            i++;
        } else {
            // left bound is a vowel
            set.add(word.charAt(i));
            let j = i + 1;
            while(j < word.length && vowels.includes(word.charAt(j))) {
                set.add(word.charAt(j));
                if(set.size === 5) cnt++;
                j++;
            }
            i++;
            set.clear();
        }
    }

    return cnt;
}
