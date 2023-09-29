function halvesAreAlike(s) {
    const left = s.substring(0, s.length / 2);
    const right = s.substring(s.length / 2);

    return countVowels(left) === countVowels(right);
}

function countVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let cnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s.charAt(i))) {
            cnt++;
        }
    }

    return cnt;
}
