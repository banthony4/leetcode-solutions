/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parent = root.val, pVal = p.val, qVal = q.val;
    
    if(pVal > parent && qVal > parent){
        return lowestCommonAncestor(root.right, p, q)
    } else if(pVal < parent && qVal < parent){
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
    
};