/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UnionFind {
    constructor(size) {
        this.root = Array.from({length: size}).map((_, i) => i)
        this.rank = Array.from({length: size}).map((_, i) => 1)
        this.groups = size
    }
    find(x) {
        if (x === this.root[x]) return x
        return this.root[x] = this.find(this.root[x])
    }
    unionSet(x,y) {
        let rootx = this.find(x), rooty = this.find(y)
        if (rootx != rooty) {
            this.groups--

            if (this.rank[rootx] > this.rank[rooty]) {
                this.root[rooty] = rootx    

            } else if (this.rank[rootx] < this.rank[rooty]) {
                this.root[rootx] = rooty

            } else {
                this.root[rootx] = rooty
                this.rank[rooty]++
            }
        }
    }
}

    var findCircleNum = function(isConnected) {
        let n = isConnected.length, mySet = new UnionFind(n)

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (isConnected[i][j]) mySet.unionSet(i, j)
            }
        }
        return mySet.groups
};