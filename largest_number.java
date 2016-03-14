// Given a list of non negative integers, arrange them such that they form the largest number.
// Given [1, 20, 23, 4, 8], the largest formed number is 8423201.

public class Solution {
    /**
     *@param num: A list of non negative integers
     *@return: A string
     */
    public String largestNumber(int[] nums) {
        // write your code here

        String[] strs = new String[nums.length];
        for (int i = 0; i < nums.length; i++) {
            strs[i] = Integer.toString(nums[i]);
        }
        
        Arrays.sort(strs,new NumbersComparator());
        StringBuilder sb = new StringBuilder();
        for(String str:strs){
            sb.append(str);
        }
        String res = sb.toString();
        int index = 0;
        while(index < res.length() && res.charAt(index) =='0'){
            index++;
        }
        if(index == res.length()){
            return "0";
        }
        return res;
    }
    
    class NumbersComparator implements Comparator<String>{
        //smart! desc order
        public int compare(String a, String b){
            return (b+a).compareTo(a+b);
        }
    }
    
}