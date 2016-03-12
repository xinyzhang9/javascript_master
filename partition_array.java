// Given an array nums of integers and an int k, partition the array (i.e move the elements in "nums") such that:

// All elements < k are moved to the left
// All elements >= k are moved to the right
// Return the partitioning index, i.e the first index i nums[i] >= k.

// If nums = [3,2,2,1] and k=2, a valid answer is 1.
public class Solution {
	/** 
     *@param nums: The integer array you should partition
     *@param k: As description
     *return: The index after partition
     */
    public int partitionArray(int[] nums, int k) {
	    //write your code here
	    if(nums == null || nums.length == 0)
	        return 0;
	   int i = 0; //left
	   int j = nums.length-1; //right
	    for(;i<=j;i++){
	        if(nums[i] < k){ //find a i which nums[i] >=k on left
	            continue;
	        }
	        while(j >=i && nums[j] >=k){ //find a j which nums[j] < k on right
	            j--;
	        }
	        
	        if(j >=0 && i < j){
	            swap(nums,i,j);

	        }
	    }
	    return j+1;
    }
    private void swap(int[] nums, int i, int j){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}