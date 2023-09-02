export function isAcronym(words, s) {
    if(words.length !== s.length) return false;

    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) !== words[i].charAt(0)) return false;
    }

    return true;
}