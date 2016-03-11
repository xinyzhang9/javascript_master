// 4Sum
// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?

// Find all unique quadruplets in the array which gives the sum of target.

// Given array S = {1 0 -1 0 -2 2}, and target = 0. A solution set is:

// (-1, 0, 0, 1)
// (-2, -1, 1, 2)
// (-2, 0, 0, 2)

public class Solution {
    /**
     * @param numbers : Give an array numbersbers of n integer
     * @param target : you need to find four elements that's sum of target
     * @return : Find all unique quadruplets in the array which gives the sum of
     *           zero.
     */
    public ArrayList<ArrayList<Integer>> fourSum(int[] numbers, int target) {
        /* your code */
        HashSet<ArrayList<Integer>> hashset = new HashSet<ArrayList<Integer>>();
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        Arrays.sort(numbers);
        for(int i = 0; i < numbers.length-4; i++){
            for(int j = i+1; j < numbers.length-3; j++){
                int low = j+1;
                int high = numbers.length-1;
                while(low < high){
                    int sum = numbers[i]+numbers[j]+numbers[low]+numbers[high];
                    if(sum > target){
                        high--;
                    }else if(sum < target){
                        low++;
                    }else{
                        ArrayList<Integer> tmp = new ArrayList<Integer>();
                        tmp.add(numbers[i]);
                        tmp.add(numbers[j]);
                        tmp.add(numbers[low]);
                        tmp.add(numbers[high]);
                        
                        //deal with dup
                        if(!hashset.contains(tmp)){
                            hashset.add(tmp);
                            res.add(tmp);
                        }
                        low++;
                        high--;
                    }
                }
            }
        }
        return res;
    }
}