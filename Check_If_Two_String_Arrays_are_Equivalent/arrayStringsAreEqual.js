function arrayStringsAreEqual(word1, word2) {
    const w1 = word1.join('');
    const w2 = word2.join('');

    return w1.localeCompare(w2) === 0;
}