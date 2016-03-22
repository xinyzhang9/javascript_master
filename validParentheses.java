// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

public class Solution {
    /**
     * @param s A string
     * @return whether the string is a valid parentheses
     */
    public boolean isValidParentheses(String s) {
        // Write your code here
        if(s.length() == 0 || s.length() == 1){
            return false;
        }
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i)=='(' || s.charAt(i)=='{' || s.charAt(i)=='['){
                stack.push(s.charAt(i));
            }else{
                if(stack.size() == 0)
                    return false;
                char top = stack.pop();
                if(top == '(' && s.charAt(i)!=')')
                    return false;
                if(top == '[' && s.charAt(i)!=']')
                    return false;
                if(top == '{' && s.charAt(i)!='}')
                    return false;
            }
        }
        return stack.size() == 0;
    }
}