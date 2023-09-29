export function wordPattern(pattern, s) {
    const words = s.split(" ");
    const patters = pattern.split('');

    const str1 = convert(words);
    const str2 = convert(patters);

    return str1.localeCompare(str2) === 0 ? true : false;
}

function convert(words) {
    const map = new Map();
    let idx = 'a'.charCodeAt(0);
    let str = "";
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(!map.has(word)) {
            const c = String.fromCharCode(idx++);
            map.set(word, c);
            str += c;
        } else {
            const c = map.get(words[i]);
            str += c;
        }
    }

    return str;
}