// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0)
        return 0;
    var max = nums[0];
    var dp = [];
    for(var i in nums){
        dp[i] = 0;
    }
    for(var i in nums){
        dp[i] = (dp[i-1] > 0? dp[i-1]:0)+nums[i];
        max = Math.max(max,dp[i]);
    }
    return max;
};