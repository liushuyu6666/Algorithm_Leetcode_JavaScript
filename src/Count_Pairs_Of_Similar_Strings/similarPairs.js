export function similarPairs(words) {
    const binArr = [];

    for(const word of words) {
        // letters
        const letters = new Array(26);
        letters.fill(0);

        // characters occurrences
        for(let i = 0; i < word.length; i++) {
            letters[word.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
        }

        // convert the letters to the binary
        const binStr = letters.join('');
        const bin = parseInt(binStr, 2);
        
        binArr.push(bin);
    }

    let i = 0, cnt = 0;
    while(i < binArr.length - 1) {
        let j = i + 1;
        while(j < binArr.length) {
            if(binArr[i] === binArr[j]) {
                // binArr.splice(j, 1);
                cnt++;
            }
            j++;
        }
        i++;
    }

    return cnt;
}

console.log(similarPairs(["aabb","ab","ba"]));