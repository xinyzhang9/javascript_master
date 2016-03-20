// Given a string S, find the longest palindromic substring in S. 
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
// Given the string = "abcdzdcab", return "cdzdc".
public class Solution {
    /**
     * @param s input string
     * @return the longest palindromic substring
     */
    public String longestPalindrome(String s) {
        // Write your code here
        if(s.isEmpty() || s == null || s.length() == 1){
            return s;
        }
        String longest = s.substring(0,1);
        for(int i = 0; i < s.length(); i++){
            String tmp = helper(s,i,i);
            if(tmp.length() > longest.length()){
                longest = tmp;
            }
            tmp = helper(s,i,i+1);
            if(tmp.length() > longest.length()){
                longest = tmp;
            }
            
        }
        return longest;
        
    }
    public String helper(String s, int left, int right){
        while(left >= 0 && right <= s.length()-1 && s.charAt(left) == s.charAt(right)){
            left--;
            right++;
        }
        return s.substring(left+1,right);
    }
}