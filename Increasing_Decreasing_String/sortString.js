function sortString(s) {
    const letters = new Array(26);
    letters.fill(0);

    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        letters[code]++;
    }

    let l = s.length, i = 0, str = "";
    while(l > 0) {
        while(l > 0 && i < 26) {
            if(letters[i] > 0) {
                str += String.fromCharCode('a'.charCodeAt(0) + i);
                letters[i]--;
                l--;
            }
            i++;
        }
        i = 25;
        while(l > 0 && i >= 0) {
            if(letters[i] > 0) {
                str += String.fromCharCode('a'.charCodeAt(0) + i);
                letters[i]--;
                l--;
            }
            i--;
        }
        i = 0;
    }

    return str;
}
