// Given a binary tree, return the preorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [1,2,3].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var res = [];
    if(!root)
        return res;
    var stack = [];
    stack.push(root);
    while(stack.length > 0){
        var p = stack.pop();
        res.push(p.val);
        if(p.right)
            stack.push(p.right);
        if(p.left)
            stack.push(p.left);
    }
    return res;
};