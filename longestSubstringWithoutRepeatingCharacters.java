// Longest Substring Without Repeating Characters
// For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.

// For "bbbbb" the longest substring is "b", with the length of 1.

public class Solution {
    /**
     * @param s: a string
     * @return: an integer 
     */
    public int lengthOfLongestSubstring(String s) {
        // write your code here
        if(s.length() == 0 || s == null){
            return 0;
        }
        
        HashSet<Character> set = new HashSet<Character>();
        int left = 0;
        int max = 0;
        for(int i = 0; i < s.length(); i++){
            if(set.contains(s.charAt(i))){
                while(left < i && s.charAt(left)!= s.charAt(i)){
                    set.remove(s.charAt(left));
                    left++;
                }
                left++; //set left to be the next position after the duplicate char
                
            }else{
                set.add(s.charAt(i));
                max = Math.max(max,i-left+1);
            }
        }
        return max;
        
    }
}
