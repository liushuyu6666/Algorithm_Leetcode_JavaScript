export function findWords(words) {
    const ans = [];

    for(const word of words) {
        const n = word.length;
        const line1 = (word.toLowerCase().match(/[qwertyuiop]+/g) || []).join('');
        const line2 = (word.toLowerCase().match(/[asdfghjkl]+/g) || []).join('');
        const line3 = (word.toLowerCase().match(/[zxcvbnm]+/g) || []).join('');

        if(line1.length === n || line2.length === n || line3.length === n) {
            ans.push(word);
        }
    }

    return ans;
}