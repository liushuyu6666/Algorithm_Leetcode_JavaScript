export function areSentencesSimilarTwo(sentence1, sentence2, similarPairs) {
    if(sentence1.length !== sentence2.length) return false;

    const uf = new UnionFind();
    for(const [word1, word2] of similarPairs) {
        uf.read(word1, word2);   
    }

    for(let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i];
        const word2 = sentence2[i];
        const ancestor1 = uf.getAncestor(word1);
        const ancestor2 = uf.getAncestor(word2);
        if(ancestor1 !== ancestor2) return false;
    }

    return true;
}

class UnionFind {
    constructor() {
        this.father = []
        this.rank = []
        this.words = new Map();
        this.size = 0;
    }

    read(word1, word2) {
        if(!this.words.has(word1)) {
            this.words.set(word1, this.size);
            this.father.push(this.size);
            this.rank.push(1);
            this.size++;
        }
        if(!this.words.has(word2)) {
            this.words.set(word2, this.size);
            this.father.push(this.size);
            this.rank.push(1);
            this.size++;
        }
        const idx1 = this.words.get(word1);
        const idx2 = this.words.get(word2);
        this.merge(idx1, idx2);
    }

    getAncestor(word) {
        const idx = this.words.get(word);
        return idx !== undefined ? this.find(idx) : word;
    }

    find(x) {
        if(this.father[x] === x) return x;
        const ancestor = this.find(this.father[x]);
        this.father[x] = ancestor;
        return ancestor;
    }

    merge(x, y) {
        const ancestorX = this.find(x);
        const ancestorY = this.find(y);

        if(ancestorX === ancestorY) return;
        if(this.rank[ancestorX] > this.rank[ancestorY]) {
            this.father[ancestorY] = ancestorX;
        } else if(this.rank[ancestorX] < this.rank[ancestorY]) {
            this.father[ancestorX] = ancestorY;
        } else {
            this.father[ancestorY] = ancestorX;
            this.rank[ancestorX]++;
        }
    }
}