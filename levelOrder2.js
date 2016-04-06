// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree {3,9,20,#,#,15,7},
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res = [], queue = [root];
     traversal();
     return res;
 
     function traversal(){
         while(queue.length > 0){
             var top, len = queue.length, subRes = [];
             while(len--){
                 top = queue.shift();
                 if(top){
                     subRes.push(top.val);
                     queue.push(top.left);
                     queue.push(top.right);
                 }
             }
             if(subRes.length > 0){
                 res.unshift(subRes);
             }
         }
     }
};

