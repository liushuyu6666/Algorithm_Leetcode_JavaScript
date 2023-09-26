// time: 76 ms
// memory: 44.2 MB
function findCircleNum1(isConnected) {
    const n = isConnected.length;
    const uf = new UnionFind(n);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(isConnected[i][j] === 1) {
                uf.merge(i, j);
            }
        }
    }

    let provinces = 0;
    for(let i = 0; i < n; i++) {
        if(i === uf.parents[i]) {
            provinces++;
        }
    }

    return provinces;
}

class UnionFind{
    constructor(n) {
        this.parents = new Array(n);
        this.depths = new Array(n);
        for(let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.depths[i] = 1;
        }
    }

    // find its ancestor
    find = (x) => {
        if(this.parents[x] === x) return x;
        const ancestor = this.find(this.parents[x]);
        this.parents[x] = ancestor;
        return ancestor;
    }

    // merge
    merge = (x, y) => {
        const ancestorX = this.find(x);
        const ancestorY = this.find(y);
        const depthX = this.depths[ancestorX];
        const depthY = this.depths[ancestorY];

        if(depthX > depthY) {
            // Attach Y to X if branch Y is shorter
            this.parents[ancestorY] = ancestorX;
        } else if(depthX < depthY) {
            // Attach X to Y if branch X is shorter
            this.parents[ancestorX] = ancestorY;
        } else {
            // Attach X to Y if they equals, Y's depth will be more node deeper
            this.parents[ancestorX] = ancestorY;
            this.depths[ancestorY]++;
        }
    }
}
