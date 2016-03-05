public class Solution {
    /**
     * @param A an array of Integer
     * @return  an integer
     */
    public int longestIncreasingContinuousSubsequence(int[] A) {
        // Write your code here
        int m = A.length;
        if(A == null || m == 0)
            return 0;
        int ans = 1;
        int len = 1;
        for(int i = 1; i < m; i++){
            if(A[i] > A[i-1]){
                len++;
            }else{
                len = 1;
            }
            ans = Math.max(ans,len);
        }
        len = 1;
        for(int i = 1; i < m; i++){
            if(A[i] < A[i-1]){
                len++;
            }else{
                len = 1;
            }
            ans = Math.max(ans,len);
        }
        return ans;
    }
    
    
}