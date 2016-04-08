// For example, this binary tree is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
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
var isSymmetric = function(root) {
    if(!root)
        return true;
    return helper(root.left, root.right);
};

var helper = function(left,right){
    if(!left || !right)
        return left == right;
    if(left.val !== right.val)
        return false;
    return helper(left.left,right.right) && helper(left.right, right.left);
}