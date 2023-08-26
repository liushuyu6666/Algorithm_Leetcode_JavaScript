export function indexPairs(text, words) {
    const list = [];
    for(const word of words) {
        const len = word.length;
        let startIdx = text.indexOf(word, 0);
        while(startIdx !== -1) {
            list.push([startIdx, startIdx + len - 1]);
            startIdx = text.indexOf(word, startIdx + 1);
        }
    }

    list.sort((a, b) => {
        if(a[0] < b[0]) return -1;
        else if(b[0] < a[0]) return 1;
        // a[0] === b[0]
        else if(a[1] < b[1]) return -1;
        else return 1;
    });

    return list;
}