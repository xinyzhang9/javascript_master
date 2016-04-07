/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(!nums || nums.length === 0 || nums.length === 1)
        return;
    var i = nums.length-1;
    while(i > 0 && nums[i-1] >= nums[i]){
        i--;
    }
    if(i <= 0){
        nums.sort(function(a,b){return a-b});
        return;
    }
    var j = nums.length-1;
    while(nums[j] <= nums[i-1])
        j--;
    var tmp = nums[i-1];
    nums[i-1] = nums[j];
    nums[j] = tmp;
    
    j = nums.length-1;
    while(i < j){
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    }
    
    
};