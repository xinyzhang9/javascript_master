// Happy Number
// 19 is a happy number

// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

public class Solution {
    /**
     * @param n an integer
     * @return true if this is a happy number or false
     */
    public boolean isHappy(int n) {
        // Write your code here
        HashSet<Integer> set = new HashSet<Integer>();
        while(!set.contains(n)){
            set.add(n);
            n = sum(getDigits(n));
            if(n == 1){
                return true;
            }

        }
        return false;
    }
    public int sum(int[] arr){
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i]*arr[i];
        }
        return sum;
    }
    
    public int[] getDigits(int n){
        String s = String.valueOf(n);
        int[] res = new int[s.length()];
        int i = 0;
        while(n > 0){
            int m = n%10;
            res[i++] = m;
            n /= 10;
        }
        return res;
    }

}