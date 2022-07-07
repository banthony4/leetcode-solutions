/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node === null ) return null;
    
    const map = new Map();
    
    const clone = (n) => {
        if(!map.has(n.val)){
            map.set(n.val, new Node(n.val));
            map.get(n.val).neighbors = n.neighbors.map(clone);
        }
        return map.get(n.val);
    }
    return clone(node);
};
