// Identical Binary Tree

/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */
public class Solution {
    /**
     * @param a, b, the root of binary trees.
     * @return true if they are identical, or false.
     */
    public boolean isIdentical(TreeNode a, TreeNode b) {
        // Write your code here

        return helper(a,b);
    }
    
    private boolean helper(TreeNode a, TreeNode b){
        if(a == null && b == null)
            return true;
        if(a != null && b!= null){
            return (a.val == b.val && helper(a.left, b.left) && helper(a.right,b.right));
        }
        return false;
    }
}