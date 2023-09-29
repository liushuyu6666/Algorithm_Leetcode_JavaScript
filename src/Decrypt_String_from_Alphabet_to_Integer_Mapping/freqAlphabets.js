export function freqAlphabets(s) {
    let i = s.length - 1, str = '';
    while(i >= 0) {
        let integer;
        if(s.charAt(i) === '#') {
            integer = parseInt(s.charAt(i - 2) + s.charAt(i - 1) + '');
            i = i - 3;
        } else {
            integer = parseInt(s.charAt(i));
            i--;
        }
        const char = String.fromCharCode(integer + 'a'.charCodeAt(0) - 1);
        str = char + str;
    }

    return str;
}