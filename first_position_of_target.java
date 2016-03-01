// For a given sorted array (ascending order) and a target number, 
// find the first index of this number in O(log n) time complexity.

// If the target number does not exist in the array, return -1.
// If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.

class Solution {
    /**
     * @param nums: The integer array.
     * @param target: Target to find.
     * @return: The first position of target. Position starts from 0.
     */
    public int binarySearch(int[] nums, int target) {
        //write your code here

        if(nums.length == 0 || nums == null){
            return -1;
        }
        int left = 0;
        int right = nums.length-1;
        
        while(left + 1 < right){
            int mid = left + (right-left)/2;
            if(nums[mid]<target){
                left = mid;
            }else{
                right = mid;
            }
        }
        if(nums[left] == target){
            return left;
        }
        if(nums[right] == target){
            return right;
        }
        return -1;
        
    }
}