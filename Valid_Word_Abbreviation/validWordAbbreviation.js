export function validWordAbbreviation(word, abbr) {
    const digits = abbr.match(/[0-9]+/g) || [];
    const letters = abbr.match(/[a-z]+/g) || [];

    for(const digit of digits) {
        if(digit.charAt(0) === '0') return false; // Leading zero is not allowed.
    }

    if(abbr.charCodeAt(0) >= '0'.charCodeAt(0) && abbr.charCodeAt(0) <= '9'.charCodeAt(0)) {
        const number = parseInt(digits[0]);
        if(number > word.length) return false;
        word = word.substring(number);
        digits.shift();
    }
    while(digits.length > 0 && letters.length > 0) {
        const letter = letters[0];
        const idx = word.indexOf(letter);
        if(idx !== 0) return false;
        word = word.substring(letter.length);
        letters.shift();

        const number = parseInt(digits[0]);
        if(number > word.length) return false;
        digits.shift();
        word = word.substring(number);
    }

    if(digits.length > 0) {
        const number = parseInt(digits[0]);
        if(number > word.length) return false;
        word = word.substring(number);
        letters.shift();
    } else if (letters.length > 0) {
        const letter = letters[0];
        const idx = word.indexOf(letter);
        if(idx !== 0) return false;
        digits.shift();
        word = word.substring(letter.length);
    }

    return word.length === 0;
}