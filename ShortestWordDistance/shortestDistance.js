/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export function shortestDistance(wordsDict, word1, word2) {
    const stack1 = [], stack2 = [];

    let min = 40000;
    for(let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i].localeCompare(word1) === 0) {
            stack1.push(i);
            if(stack2.length > 0) {
                min = Math.min(min, i - stack2[stack2.length - 1]);
            }
        } else if(wordsDict[i].localeCompare(word2) === 0) {
            stack2.push(i);
            if(stack1.length > 0) {
                min = Math.min(min, i - stack1[stack1.length - 1]);
            }
        }
    }

    return min;

}
