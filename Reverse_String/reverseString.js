export function reverseString(s) {
    let temp;
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        const j = s.length - i - 1;
        temp = s[i];
        s[i] = s[j];
        s[j] = temp; 
    }
}