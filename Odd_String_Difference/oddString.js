export function oddString(words) {
    const diffArr1 = getDiffIntArr(words[0]);
    const diffArr2 = getDiffIntArr(words[1]);
    const diffArr3 = getDiffIntArr(words[2]);
    let baseArr;

    if(compareDiffIntArr(diffArr1, diffArr2) && compareDiffIntArr(diffArr1, diffArr3)) {
        baseArr = diffArr1;
    } else if (compareDiffIntArr(diffArr1, diffArr2) && !compareDiffIntArr(diffArr1, diffArr3)) {
        // The third word is not compatible
        return words[2];
    } else if (!compareDiffIntArr(diffArr1, diffArr2) && compareDiffIntArr(diffArr1, diffArr3)) {
        // The second word is not compatible
        return words[1];
    } else if (!compareDiffIntArr(diffArr1, diffArr2) && compareDiffIntArr(diffArr2, diffArr3)) {
        // The first word is not compatible
        return words[0];
    } 

    for(const word of words) {
        const currArr = getDiffIntArr(word);
        if(!compareDiffIntArr(currArr, baseArr)) return word;
    }
}

function getDiffIntArr(word) {
    const baseCode = word.charCodeAt(0);

    const diffIntArr = new Array(word.length - 1);
    for(let i = 1; i < word.length; i++) {
        const currCode = word.charCodeAt(i);
        const diffCode = currCode - baseCode;
        diffIntArr.push(diffCode);
    }

    return diffIntArr;
}

function compareDiffIntArr(diff1, diff2) {
    for(let i = 0; i < diff1.length; i++) {
        if(diff1[i] !== diff2[i]) return false;
    }
    return true;
}