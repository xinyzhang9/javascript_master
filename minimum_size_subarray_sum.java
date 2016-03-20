// Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return -1 instead.
// Given the array [2,3,1,2,4,3] and s = 7, the subarray [4,3] has the minimal length under the problem constraint.

//slideing window
public class Solution {
    /**
     * @param nums: an array of integers
     * @param s: an integer
     * @return: an integer representing the minimum size of subarray
     */
    public int minimumSize(int[] nums, int s) {
        // write your code here
        if(nums == null || nums.length == 0){
            return -1;
        }
        
        int res = nums.length;
        int sum = nums[0];
        //left
        int i = 0;
        //right
        for(int j = 0; j <nums.length;){
            if(i==j){
            	//single element is large enough
                if(nums[i]>=s){
                    return 1;
                }else{
                    j++;
                    if(j < nums.length){
                        sum+=nums[j];
                    }else{
                        return res;
                    }
                }
            }else{
            	//try to move left cursor
                if(sum >= s){
                    res  = Math.min(j-i+1, res);
                    sum -= nums[i];
                    i++;
                    //move right cursor
                }else{
                    j++;
                    if(j < nums.length){
                        sum+= nums[j];
                    }else{
                        if(i == 0){
                            return -1;
                        }else{
                            return res;
                        }
                    }
                }
            }
            
        }
        return res;
 
    }
}