// Longest Increasing Subsequence
// For [5, 4, 1, 2, 3], the LIS  is [1, 2, 3], return 3
// For [4, 2, 4, 5, 3, 7], the LIS is [4, 4, 5, 7], return 4

//O(n^2) version
public class Solution {
    /**
     * @param nums: The integer array
     * @return: The length of LIS (longest increasing subsequence)
     */
    public int longestIncreasingSubsequence(int[] nums) {
        // write your code here
        if(nums == null || nums.length == 0){
            return 0;
        }
        int[] dp = new int[nums.length];
        //init dp
        for(int i = 0; i < dp.length; i++){
            dp[i] = 1;
        }
        for(int i = 1; i < dp.length; i++){
            for(int j = 0; j < i; j++){
                if(nums[j] <= nums[i] && dp[i] < dp[j]+1 ){
                    dp[i] = dp[j] + 1;
                }
            }
        }
        int max = 0;
        for(int i = 0; i < dp.length; i++){
            if(dp[i] > max){
                max = dp[i];
            }
        }
        return max;
        
    }
}
