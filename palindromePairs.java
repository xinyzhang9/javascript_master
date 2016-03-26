// Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Example 1:
// Given words = ["bat", "tab", "cat"]
// Return [[0, 1], [1, 0]]
// The palindromes are ["battab", "tabbat"]
// Example 2:
// Given words = ["abcd", "dcba", "lls", "s", "sssll"]
// Return [[0, 1], [1, 0], [3, 2], [2, 4]]
// The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]

public class Solution {
    public List<List<Integer>> palindromePairs(String[] words) {
        List<List<Integer>> res = new ArrayList<>();
        if(words == null || words.length < 2){
            return res;
        }
        Map<String,Integer> map = new HashMap<String,Integer>();
        for(int i = 0; i < words.length; i++){
            map.put(words[i],i);
        }
        for(int i = 0; i < words.length; i++){
            for(int j = 0; j <= words[i].length(); j++){
                String str1 = words[i].substring(0,j);
                String str2 = words[i].substring(j);
                if(isPalindrome(str1)){
                    String str2rev = new StringBuilder(str2).reverse().toString();
                    if(map.containsKey(str2rev) && map.get(str2rev)!=i){
                        List<Integer> list = new ArrayList<Integer>();
                        list.add(map.get(str2rev));
                        list.add(i);
                        res.add(list);
                    }
                }
                if(isPalindrome(str2)){
                    String str1rev = new StringBuilder(str1).reverse().toString();
                    if(map.containsKey(str1rev) && map.get(str1rev)!=i && str2.length()!=0){
                        List<Integer> list = new ArrayList<Integer>();
                        list.add(i);
                        list.add(map.get(str1rev));
                        res.add(list);
                    }
                }
                
            }
        }
        return res;
        
    }
    private boolean isPalindrome(String str){
        int left = 0;
        int right = str.length()-1;
        while(left <= right){
            if(str.charAt(left++) != str.charAt(right--)){
                return false;
            }
        }
        return true;
    }
}