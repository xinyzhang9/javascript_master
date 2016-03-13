// Subarray Sum Closest
// Given an integer array, find a subarray with sum closest to zero. Return the indexes of the first number and last number.
// Given [-3, 1, 1, -3, 5], return [0, 2], [1, 3], [1, 1], [2, 2] or [0, 4].

public class Solution {
    /**
     * @param nums: A list of integers
     * @return: A list of integers includes the index of the first number 
     *          and the index of the last number
     */
     
    
    public int[] subarraySumClosest(int[] nums) {
        // write your code here
        int[] res = new int[2];
        if(nums == null || nums.length == 0){
            return res;
        }
        int len = nums.length;
        if(len == 1){
            res[0] = res[1] = 0;
            return res;
        }
        Pair[] sums = new Pair[len+1];
        sums[0] = new Pair(0,0);
        int presum = 0;
        for(int i = 1; i < sums.length; i++){
            sums[i] = new Pair(presum + nums[i-1],i);
            presum = sums[i].sum;
        }
        Arrays.sort(sums, new Comparator<Pair>(){
            public int compare(Pair a, Pair b){
                return a.sum - b.sum;
            }
        });
        int ans = Integer.MAX_VALUE;
        for(int i = 1; i < sums.length; i++){
            if(ans > sums[i].sum - sums[i-1].sum){
                ans = sums[i].sum - sums[i-1].sum;
                int[] tmp = new int[]{sums[i].index-1,sums[i-1].index-1};
                Arrays.sort(tmp);
                res[0] = tmp[0]+1;
                res[1] = tmp[1];
                
            }
        }
        return res;
        
        
    }
    class Pair{
        int sum;
        int index;
        public Pair(int s, int i){
            sum = s;
            index = i;
        }
    }
}
