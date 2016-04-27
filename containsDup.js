// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    for(var x in nums){
        if(map[nums[x]] !== undefined){
            return true;
        }else{
            map[nums[x]] = 1;
        }
    }
    return false;
};