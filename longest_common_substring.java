public class Solution {
    /**
     * @param A, B: Two string.
     * @return: the length of the longest common substring.
     */
    public int longestCommonSubstring(String A, String B) {
        // write your code here
        int max = 0;
        int[][] dp = new int[A.length()+1][B.length()+1];
        for(int i = 1; i <=A.length(); i++){
            for(int j = 1; j <=B.length(); j++){
                if(B.charAt(j-1) == A.charAt(i-1)){
                    dp[i][j] = dp[i-1][j-1] + 1;
                    if(dp[i][j] > max)
                        max = dp[i][j];
                }
            }
        }
        return max;
    }
}