// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.
// For example, given array S = {-1 0 1 2 -1 -4}, A solution set is:
// (-1, 0, 1)
// (-1, -1, 2)

public class Solution {
    /**
     * @param numbers : Give an array numbers of n integer
     * @return : Find all unique triplets in the array which gives the sum of zero.
     */
    public ArrayList<ArrayList<Integer>> threeSum(int[] numbers) {
        // write your code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        if(numbers == null || numbers.length < 3){
            return res;
        }
        
        Arrays.sort(numbers);
        for(int i = 0; i < numbers.length-2; i++){
            if(i != 0 && numbers[i] == numbers[i-1]){
                continue; //to skip duplicate
            }
            int left = i+1;
            int right = numbers.length-1;
            while(left < right){
                int sum = numbers[left] + numbers[right] + numbers[i];
                if(sum == 0){
                    ArrayList<Integer> tmp = new ArrayList<Integer>();
                    tmp.add(numbers[i]);
                    tmp.add(numbers[left]);
                    tmp.add(numbers[right]);
                    res.add(tmp); //add to result
                    left++;
                    right--;
                    while(left < right && numbers[left] == numbers[left-1]){ //skip duplicate
                        left++;
                    }
                    while(left < right && numbers[right] == numbers[right+1]){ //skip duplicate
                        right--;
                    }
                }else if(sum < 0){
                    left++;
                }else{
                    right--;
                }
            }
        }
        return res;
    }
}