// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];
    if(!root)
        return res;
    helper(root,"",res);
    return res;
};

var helper = function(root,path,res){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        path += root.val;
        res.push(path);
    }
    helper(root.left, path+root.val+"->",res);
    helper(root.right, path+root.val+"->",res);
}