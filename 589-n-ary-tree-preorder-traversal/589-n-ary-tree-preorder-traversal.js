/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
   let result = [];
    
    const traverse = (tree) => {
        if(!tree) return result;
        
        result.push(tree.val);
        
        for(let child of tree.children){
            traverse(child);
        }
        return result;
    } 
    return traverse(root)
};