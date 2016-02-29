// Given two binary strings, return their sum (also a binary string).
// a = 11

// b = 1

// Return 100

public class Solution {
    /**
     * @param a a number
     * @param b a number
     * @return the result
     */
    public String addBinary(String a, String b) {
        // Write your code here
       if(a == null || a.length() == 0){
           return b;
       }
       if(b == null || b.length() == 0){
           return a;
       }
       int pa = a.length()-1;
       int pb = b.length()-1;
       int flag = 0;
       StringBuilder sb = new StringBuilder();
       while(pa >=0 || pb >= 0){
           int va = 0;
           int vb = 0;
           if(pa >= 0){
               va = (a.charAt(pa) == '1')?1:0;
               pa--;
           }
           if(pb >= 0){
               vb = (b.charAt(pb) == '1')?1:0;
               pb--;
           }
           int sum = va + vb + flag;
           if(sum >=2){
               sb.append(Integer.toString(sum-2));
               flag = 1;
           }else{
               flag = 0;
               sb.append(Integer.toString(sum));
           }
           
       }
       if (flag == 1){
           sb.append("1");
       }
       String reversed = sb.reverse().toString();
       return reversed;
       
    }
}