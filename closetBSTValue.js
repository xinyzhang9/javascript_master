// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

// Note:
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var a = root.val;
    var kid = (target > root.val)?root.right : root.left;
    if(!kid)
        return a;
    var b = closestValue(kid,target);
    return (Math.abs(a - target) < Math.abs(b - target))?a : b;
};

