// Find the Missing Number
// Given an array contains N numbers of 0 .. N, 
// find which number doesn't exist in the array.
// Given N = 3 and the array [0, 1, 3], return 2.


//solution 1, n(n+1)/2-sum
//solution 2, A xor B = c <=> A xor c = B
//solution 3, bucket sort
public class Solution {
    /**    
     * @param nums: an array of integers
     * @return: an integer
     */
    public int findMissing(int[] nums) {
        
        // int partialSum = nums[0];
        // int sum = 1;
        // for(int i = 1; i < nums.length; i++){
        //     partialSum = partialSum ^ nums[i];
        // }
        // for(int i = 2; i <=nums.length; i++){
        //     sum = sum ^ i;
        // }
        // return partialSum ^ sum;
        
        for(int i = 0; i < nums.length; i++){
            while(nums[i] >= 0 && nums[i] < nums.length && nums[i] != i){
                int tmp = nums[nums[i]];
                if(tmp == nums[i])
                    break;
                nums[nums[i]] = nums[i];
                nums[i] = tmp;
            }
        }
        for(int i = 0; i < nums.length; i++){
            if(nums[i]!=i)
                return i;
        }
        return nums.length;
    }
}
