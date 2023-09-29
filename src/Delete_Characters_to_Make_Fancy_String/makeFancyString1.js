String.prototype.splice = function (index) {
    return this.substring(0, index) + this.substring(index + 1);
}

export function makeFancyString1(s) {
    let i = 0, j = i + 1;
    while(i < s.length - 1 && j < s.length) {
        if(s.charAt(i) === s.charAt(j)) {
            // need to measure the distance
            if(j - i + 1 === 3) {
                s = s.splice(j); // remove the character at j
            } else {
                j++;
            }
        } else {
            i = j;
            j = i + 1;
        }
    }
    return s;
}