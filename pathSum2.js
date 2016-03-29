// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    var res = [];
    var path = [];
    if(!root)
        return res;
    helper(root,sum,path,res);
    return res;
};

var helper = function(root,sum,path,res){
    path.push(root.val);
    if(!root.left && !root.right ){
        if(root.val === sum){
            var pathcopy = path.slice(0);
            res.push(pathcopy);
            
        }
    }
    if(root.left){
        helper(root.left, sum-root.val, path, res);
        
    }
    if(root.right){
        helper(root.right, sum-root.val, path, res);
    }
    path.pop();
    
}