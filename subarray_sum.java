// Subarray Sum
// Given an integer array, find a subarray where the sum of numbers is zero. 
// Your code should return the index of the first number and the index of the last number.
// Given [-3, 1, 2, -3, 4], return [0, 2] or [1, 3].

public class Solution {
    /**
     * @param nums: A list of integers
     * @return: A list of integers includes the index of the first number 
     *          and the index of the last number
     */
    public ArrayList<Integer> subarraySum(int[] nums) {
        // write your code here
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        map.put(0,-1);
        int sum = 0;
        ArrayList<Integer> ans = new ArrayList<Integer>();
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            if(map.containsKey(sum)){
                ans.add(map.get(sum)+1);
                ans.add(i);
                return ans;
            }
            map.put(sum,i);
        }
        return ans;

    }
}