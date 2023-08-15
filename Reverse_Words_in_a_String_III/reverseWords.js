export function reverseWords(s) {
    const words = s.split(' ');
    const reversed = words.map(w => w.split('').reverse().join(''));
    return reversed.join(' ');
}