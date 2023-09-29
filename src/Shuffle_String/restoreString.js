export function restoreString(s, indices) {
    const newStr = new Array(indices.length);

    // retrieve the indices, put characters into newStr
    for(let i = 0; i < indices.length; i++) {
        const index = indices[i];
        newStr[index] = s.charAt(i);
    }

    return newStr.join('');
}