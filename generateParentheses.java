// Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
public class Solution {
    /**
     * @param n n pairs
     * @return All combinations of well-formed parentheses
     */
    public ArrayList<String> generateParenthesis(int n) {
        // Write your code here
        ArrayList<String> res = new ArrayList<String>();
        if(n <= 0){
            return res;
        }
        helper(res,"",n,n);
        return res;
    }
    
    private void helper(ArrayList<String> res, String str, int left, int right){

        if(left == 0 && right == 0){
            res.add(str);
            return;
        }
        if(left > 0){
            helper(res,str+"(",left-1,right);
        }
        if(right > 0 && left < right){
            helper(res,str+")",left,right-1);
        }
    }
}