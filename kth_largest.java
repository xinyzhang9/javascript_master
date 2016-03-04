// In array [9,3,2,4,8], the 3rd largest element is 4.

// In array [1,2,3,4,5], the 1st largest element is 5, 
// 2nd largest element is 4, 3rd largest element is 3 and etc.

class Solution {
    /*
     * @param k : description of k
     * @param nums : array of nums
     * @return: description of return
     */
    public int kthLargestElement(int k, int[] nums) {
        // write your code here
        if(nums == null || nums.length == 0 || k <=0)
            return 0;
        return helper(nums, 0, nums.length-1,k);
    }
    
    public int helper(int[] nums,int l, int r, int k){
        if(l == r){
            return nums[l];
        }
        int position = partition(nums,l,r);
        if(position + 1 == k){
            return nums[position];
        }else if(position +1 < k){
            return helper(nums,position+1,r,k);
        }else{
            return helper(nums,l,position-1,k);
        }
    }
    
    public int partition(int[] nums, int l, int r){
        if(l == r){
            return l;
        }
        int num = nums[r];
        int index = l;
        for(int i = l; i < r; i++){ //not i<=r!
            if(nums[i] >= num){
                //swap nums[i] and nums[index]
                int tmp = nums[i];
                nums[i] = nums[index];
                nums[index] = tmp;
                index++;
            }
        }
        nums[r]=nums[index];
        nums[index] = num;
        return index;
    }
};