export function splitWordsBySeparator(words, separator) {

    const ans = [];
    for (const word of words) {
        const elements = word.split(separator);
        for(const element of elements) {
            if(element.length > 0) ans.push(element);
        }
    }

    return ans;
}