// Given a binary tree, return all root-to-leaf paths.
//   1
//  /   \
// 2     3
//  \
//   5

//   [
//   "1->2->5",
//   "1->3"
// ]

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
     * @param root the root of the binary tree
     * @return all root-to-leaf paths
     */
    public List<String> binaryTreePaths(TreeNode root) {
        // Write your code here
        List<String> res = new ArrayList<String>();
        if(root == null){
            return res;
        }
        helper(root,String.valueOf(root.val),res);
        return res;
    }
    
    private void helper(TreeNode root, String path, List<String> res){
        if(root == null){
            return;
        }
        if(root.left == null && root.right == null ){
            res.add(path);
            return;
        }
        if(root.left != null){
            helper(root.left,path + "->" + String.valueOf(root.left.val),res);
        }
        if(root.right != null){
            helper(root.right, path + "->" + String.valueOf(root.right.val), res);
        }
    }
}