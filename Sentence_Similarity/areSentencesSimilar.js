export function areSentencesSimilar(sentence1, sentence2, similarPairs) {
    if(sentence1.length !== sentence2.length) return false;

    const pairSet = new Set();
    for(const [word1, word2] of similarPairs) {
        pairSet.add(`${word1}#${word2}`);
    }

    for(let i = 0; i < sentence1.length; i++) {
        const pair1 = `${sentence1}#${sentence2}`;
        const pair2 = `${sentence2}#${sentence1}`;
        if(!sentence1[i] === sentence2[i] && 
            !pairSet.has(pair1) && !pairSet.has(pair2)) return false;
    }

    return true;
};