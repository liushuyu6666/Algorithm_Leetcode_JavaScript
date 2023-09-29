export function detectCapitalUse(word) {
    const str = word.substring(1);
    if(str.length === 0) {
        return true;
    }

    const allLower = (str.match(/[a-z]+/g) || []).join('');
    const allUpper = (str.match(/[A-Z]+/g) || []).join('');

    if(allLower.length === str.length) {
        return true;
    }
    if(allUpper.length === str.length && word.charCodeAt(0) >= 'A'.charCodeAt(0) && word.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
        return true;
    }
    return false;
}