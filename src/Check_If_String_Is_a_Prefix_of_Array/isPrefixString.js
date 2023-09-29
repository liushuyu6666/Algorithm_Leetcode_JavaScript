export function isPrefixString(s, words) {
    for(const word of words) {
        if(s.length > 0 && s.indexOf(word) !== 0) {
            return false;
        } else if (s.length === 0) {
            return true;
        }
        s = s.substring(word.length);
    }
    return s.length === 0;
}
