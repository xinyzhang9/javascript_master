// Partition Array by Odd and Even
// Partition an integers array into odd number first and even number second.
// Given [1, 2, 3, 4], return [1, 3, 2, 4]

//in-place solution
public class Solution {
    /**
     * @param nums: an array of integers
     * @return: nothing
     */
    public void partitionArray(int[] nums) {
        // write your code here;
        if(nums == null || nums.length == 0){
            return;
        }
        int left = 0;
        int right = nums.length-1;
        helper(nums,left,right);
        

    }
    
    public void helper(int[] nums, int left, int right){
        if(left >= right){
            return;
        }
        while(left < right){
            while(nums[left] % 2 == 1 && left < right){
                left++;
            }
            while(nums[right] % 2 == 0 && left < right){
                right--;
            }
            if(left < right){
                int tmp = nums[left];
                nums[left] = nums[right];
                nums[right] = tmp;
            }else{
                return;
            }
            
            
        }
        
    }
}