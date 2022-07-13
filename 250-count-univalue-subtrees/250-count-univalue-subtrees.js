/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    let count = 0;
    
    const uniVals = (node) => {
        if(!node) return true;
        
        const left = uniVals(node.left);
        const right = uniVals(node.right);
        
        if(!left || !right) return false;
        
        if(node.left && node.left.val != node.val) return false;
        if(node.right && node.right.val != node.val) return false;
        
        count++
        return true;
    }
    
    
    uniVals(root);
    return count
}