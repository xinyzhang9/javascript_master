// Sort Letters by Case
// Given a string which contains only letters. Sort it by lower case first and upper case second.
// For "abAcD", a reasonable answer is "acbAD"

public class Solution {
    /** 
     *@param chars: The letter array you should sort by Case
     *@return: void
     */
    public void sortLetters(char[] chars) {
        //write your code here
        int i = 0;
        int j = chars.length-1;
        char tmp;
        while(i <= j){
            while(i<=j && Character.isLowerCase(chars[i])){
                i++;
            }
            while(i<=j && Character.isUpperCase(chars[j])){
                j--;
            }
            if(i <= j){
                tmp = chars[i];
                chars[i] = chars[j];
                chars[j] = tmp;
                i++;
                j--;
            }
        }
        return;
    }
}
