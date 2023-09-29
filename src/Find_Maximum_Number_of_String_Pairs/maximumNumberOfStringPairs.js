export function maximumNumberOfStringPairs(words) {
    let i = 0, cnt = 0;
    while(i < words.length - 1) {
        let j = i + 1;
        while(j < words.length) {
            if(isPair(words[i], words[j])) {
                cnt++;
                words.splice(j, 1);
                break;
            }
            j++;
        }
        i++;
    }

    return cnt;
}

function isPair(word1, word2) {
    return word1.charAt(0) === word2.charAt(1) && word1.charAt(1) === word2.charAt(0);
}