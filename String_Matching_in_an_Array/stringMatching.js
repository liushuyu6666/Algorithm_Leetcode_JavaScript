export function stringMatching(words) {
    const ans = new Set();

    let i = 0;
    while(i < words.length) {
        let j = i + 1;
        while(j < words.length) {
            if(words[i].indexOf(words[j]) !== -1) {
                // if the words[i] contains the words[j];
                ans.add(words[j]);
                deleteOne(words, j);
            } else if (words[j].indexOf(words[i]) !== -1) {
                // if the words[j] contains the words[i];
                ans.add(words[i]);
                j++;
            } else {
                // no match
                j++;
            }
        }
        i++;
    }

    return Array.from(ans);
}

function deleteOne(words, idx) {
    return words.splice(idx, 1);
}
