class StringIterator {
    constructor(compressedString) {
        this.letters = [];
        this.occurrence = [];

        const segments = compressedString.match(/[a-zA-Z]\d+/g);

        segments.forEach((seg) => {
            const letter = seg[0];
            const number = parseInt(seg.substring(1));

            this.letters.push(letter);
            this.occurrence.push(number);
        });
    }

    next() {
        if(this.letters.length === 0) return ' ';

        const ret = this.letters[0];
        this.occurrence[0]--;

        if(this.occurrence[0] === 0) {
            this.occurrence.shift();
            this.letters.shift();
        }

        return ret;
    }

    hasNext() {
        return this.letters.length !== 0;
    }
}
