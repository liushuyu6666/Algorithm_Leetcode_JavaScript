export function kthDistinct(arr, k) {
    const map = new Map();

    for(const word of arr) {
        if(map.has(word)) {
            const t = map.get(word);
            map.set(word, t + 1);
        } else {
            map.set(word, 1);
        }
    }

    for(const word of arr) {
        if(map.get(word) === 1) {
            k--;
        }

        if(k === 0) {
            return word;
        }
    }

    return "";
}

kthDistinct(["d","b","c","b","c","a"], 2)