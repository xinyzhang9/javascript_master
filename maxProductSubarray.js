// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 0)
        return 0;
    var maxProduct = nums[0];
    var min_tmp = nums[0];
    var max_tmp = nums[0];
    for(var i = 1; i < nums.length; i++){
        var a = nums[i]*min_tmp;
        var b = nums[i]*max_tmp;
        min_tmp = Math.min(nums[i],Math.min(a,b));
        max_tmp = Math.max(nums[i],Math.max(a,b));
        maxProduct = Math.max(maxProduct,max_tmp);
    }
    return maxProduct;
};