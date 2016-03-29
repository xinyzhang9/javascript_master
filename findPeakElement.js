// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(!nums || nums.length === 0)
        return -1;
    var left = 0;
    var right = nums.length-1;
    while(left + 1 < right){
        var mid = left + parseInt((right-left)/2);
        if(nums[mid-1] > nums[mid]){
            right = mid;
        }else if(nums[mid] < nums[mid+1]){
            left = mid;
        }else{
            return mid;
        }
    }
    mid = (nums[left] > nums[right])?left:right;
    return mid;
};