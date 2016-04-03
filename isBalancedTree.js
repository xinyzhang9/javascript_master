/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root)
        return true;
    var left = treeDepth(root.left);
    var right = treeDepth(root.right);
    if(Math.abs(left - right) > 1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

var treeDepth = function(root){
    if(!root)
        return 0;
    return Math.max(treeDepth(root.left),treeDepth(root.right))+1;
};