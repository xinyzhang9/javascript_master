// Binary Tree Longest Consecutive Sequence
// For example,
//    1
//     \
//      3
//     / \
//    2   4
//         \
//          5
// Longest consecutive sequence path is 3-4-5, so return 3.
//    2
//     \
//      3
//     / 
//    2    
//   / 
//  1
// Longest consecutive sequence path is 2-3,not3-2-1, so return 2.
// Show Company Tags
// Show Tags
// Show Similar Problems

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    if(!root)
        return 0;
    return helper(root,0,root.val-1);
};

var helper = function(root,len,preVal){
    if(!root)
        return len;
    var curLen = root.val === preVal + 1? len+1 : 1;
    return Math.max(curLen, Math.max(helper(root.left,curLen,root.val),helper(root.right,curLen,root.val)));
}
