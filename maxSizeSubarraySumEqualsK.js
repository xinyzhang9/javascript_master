// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    if(!nums || nums.length < 1)
        return 0;
    var map = {};
    var maxlen = 0;
    map[0] = -1;
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map[sum] === undefined){
            map[sum] = i;
        }
        if(map[sum-k]!==undefined){
            maxlen = Math.max(maxlen, i - map[sum-k]);
        }
    }
    return maxlen;
};