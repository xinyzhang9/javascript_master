// Subsets

// Given a set of distinct integers, return all possible subsets.

// If S = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

class Solution {
    /**
     * @param S: A set of numbers.
     * @return: A list of lists. All valid subsets.
     */
    public ArrayList<ArrayList<Integer>> subsets(int[] nums) {
        // write your code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        if(nums == null || nums.length == 0)
            return res;
        Arrays.sort(nums);
        for(int i = 0; i < nums.length; i++){
            ArrayList<ArrayList<Integer>> tmp = new ArrayList<ArrayList<Integer>>();
            for(int j = 0; j < res.size(); j++){
                tmp.add(new ArrayList<Integer>(res.get(j)));
            }
            for(int j = 0; j < tmp.size(); j++){
                tmp.get(j).add(nums[i]);
            }
            ArrayList<Integer> single = new ArrayList<Integer>();
            single.add(nums[i]);
            tmp.add(single);
            res.addAll(tmp);
        }
        res.add(new ArrayList<Integer>());
        return res;
    }
}