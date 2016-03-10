// Remove Element
// Given an array and a value, remove all occurrences of that value in place and return the new length.

// The order of elements can be changed, and the elements after the new length don't matter.
// Given an array [0,4,4,0,0,2,4,4], value=4

// return 4 and front four elements of the array is [0,0,0,2]

public class Solution {
    /** 
     *@param A: A list of integers
     *@param elem: An integer
     *@return: The new length after remove
     */
    public int removeElement(int[] A, int elem) {
        // write your code here
        int n = A.length;
        for(int i = 0; i < n; i++){
            if(A[i] == elem){
                A[i] = A[n-1];
                i--;
                n--;
            }
        }
        return n;
    }
}