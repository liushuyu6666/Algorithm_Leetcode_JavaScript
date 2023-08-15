export function areSentencesSimilar(sentence1, sentence2, similarPairs) {
    if(sentence1.length !== sentence2.length) return false;

    const map = new Map();
    for(let i = 0; i < similarPairs.length; i++) {
        if(map.has(similarPairs[i][0])) {
            map.get(similarPairs[i][0]).add(similarPairs[i][1]);
        } else {
            const set = new Set();
            map.set(similarPairs[i][0], set.add(similarPairs[i][1]));
        }
    }

    const n = sentence1.length;
    for(let i = 0; i < n; i++) {
        const word1 = sentence1[i], word2 = sentence2[i];
        const set1 = map.get(word1) || new Set(), set2 = map.get(word2) || new Set();
        if(word1 === word2) continue;
        if(set1.has(word2)) continue;
        if(set2.has(word1)) continue;
        return false;
    }

    return true;
};