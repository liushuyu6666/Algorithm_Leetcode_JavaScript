export function removeVowels(s) {
    let str = "";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < s.length; i++) {
        if(!vowels.includes(s.charAt(i))) str += s.charAt(i);
    }
    return str;
}