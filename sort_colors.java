// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Given [1, 0, 1, 2], sort it in-place to [0, 1, 1, 2].

//3 pointers: red, blue and i
class Solution {
    /**
     * @param nums: A list of integer which is 0, 1 or 2 
     * @return: nothing
     */
    public void sortColors(int[] nums) {
        // write your code here
        if(nums == null || nums.length == 0)
            return;
        int p_red = 0;
        int p_blue = nums.length -1;
        int i = 0;
        while(i <= p_blue){
            if(nums[i] == 0){
                swap(nums,i,p_red);
                p_red++;
                i++;
            }else if(nums[i] == 1){
                i++;
            }else{
                swap(nums,i,p_blue);
                p_blue--;
                
            }
        }
        return;
    }
    
    private void swap(int[] nums,int i,int j){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    
}