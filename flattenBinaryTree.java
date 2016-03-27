// Flatten a binary tree to a fake "linked list" in pre-order traversal.
// Here we use the right pointer in TreeNode as the next pointer in ListNode.

 //            1
 //               \
 //     1          2
 //    / \          \
 //   2   5    =>    3
 //  / \   \          \
 // 3   4   6          4
 //                     \
 //                      5
 //                       \
 //                        6

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

//use last node as reference

public class Solution {
    /**
     * @param root: a TreeNode, the root of the binary tree
     * @return: nothing
     */
    private TreeNode lastnode = null;
    public void flatten(TreeNode root) {
        // write your code here
        if(root == null){
            return;
        }
        if(lastnode != null){
            lastnode.left = null;
            lastnode.right = root;
        }
        
        lastnode = root;
        TreeNode right = root.right;
        flatten(root.left);
        flatten(right);
        
        
    }
}