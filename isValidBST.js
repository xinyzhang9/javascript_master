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
var isValidBST = function(root) {
    var min = -2147483649; //Number.MIN_VALUE
    var max = 2147483648; //Number.MAX_VALUE
    
    return helper(root,min,max);
};

var helper = function(root,min,max){
    if(!root)
        return true;
    if(root.val >= max || root.val <= min)
        return false;
    return helper(root.left,min,root.val) && helper(root.right,root.val,max);
}