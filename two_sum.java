// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, 
// where index1 must be less than index2. Please note that your returned answers (both index1 and index2) 
// are NOT zero-based.

// numbers=[2, 7, 11, 15], target=9
// return [1, 2]

public class Solution {
    /*
     * @param numbers : An array of Integer
     * @param target : target = numbers[index1] + numbers[index2]
     * @return : [index1 + 1, index2 + 1] (index1 < index2)
     */
    public int[] twoSum(int[] numbers, int target) {
        // write your code here
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i <= numbers.length; i++){
        	//check if the ans is already set in previous steps.
            if(map.get(numbers[i])!=null){
                int[] result = {map.get(numbers[i]),i+1};
                return result;
            }
            map.put(target-numbers[i],i+1); //first do it.
        }
        int[] result = {-1,-1};
        return result;
    }
}