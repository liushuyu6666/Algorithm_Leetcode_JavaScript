export function countComponents_uf(n, edges) {
    const uf = new UnionFind(n);

    for(let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        uf.merge(edge[0], edge[1]);
    }

    let cnt = 0;
    for(let i = 0; i < n; i++) {
        if(uf.father[i] === i) cnt++
    }

    return cnt;
}

class UnionFind {
    constructor(n) {
        this.father = new Array(n);
        for(let i = 0; i < n; i++) this.father[i] = i;
        this.rank = new Array(n).fill(1);
    }

    // Find ancestor of x
    find(x) {
        if(x === this.father[x]) {
            return x;
        } else {
            const ancestor = this.find(this.father[x]);
            this.father[x] = ancestor;
            return ancestor;
        }
    }

    // Merge two branches
    merge(x, y) {
        const ancestorX = this.find(x);
        const ancestorY = this.find(y);

        if(ancestorX === ancestorY) return; // x and y are already been in the same branch
        if(this.rank[ancestorX] > this.rank[ancestorX]) {
            this.father[ancestorY] = ancestorX;
        } else if(this.rank[ancestorX] < this.rank[ancestorX]) {
            this.father[ancestorX] = ancestorY;
        } else {
            this.father[ancestorY] = ancestorX;
            this.rank[ancestorX]++;
        }
        return;
    }
}