// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length < 2)
        return;
    var insertPos = 0;
    for(var p of nums){
        if(p !== 0){
            nums[insertPos++] = p;
        }
    }
    while(insertPos < nums.length){
        nums[insertPos++] = 0;
    }
};