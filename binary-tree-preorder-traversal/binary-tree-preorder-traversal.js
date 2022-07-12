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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = [];
    let output = [];
    while (stack.length || root !== null) {
        if (root !== null) {
            output.push(root.val);
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop().right;
        }
        
    }
    return output;
};