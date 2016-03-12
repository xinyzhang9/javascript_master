// nums[0] < nums[1] > nums[2] < nums[3]....
// Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6].

// Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

public class Solution {
    /**
     * @param nums a list of integer
     * @return void
     */
    public void wiggleSort(int[] nums) {
        // Write your code here
        int[] tmp = new int[nums.length];
        for(int i = 0; i < tmp.length; i++){
            tmp[i] = nums[i];
        }
        Arrays.sort(tmp);
        int mid = (nums.length+1) >> 1;
        int end = nums.length;
        for(int i = 0; i < nums.length; i++){
            nums[i] = (i % 2 == 1)?tmp[--end]:tmp[--mid];
        }
    }
}
