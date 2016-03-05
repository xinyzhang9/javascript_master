// Longest Increasing Continuous Subsequence

// Give an integer array，find the longest increasing continuous subsequence in this array.

// An increasing continuous subsequence:

// Can be from right to left or from left to right.
// Indices of the integers in the subsequence should be continuous.

// For [5, 4, 2, 1, 3], the LICS is [5, 4, 2, 1], return 4.

// For [5, 1, 2, 3, 4], the LICS is [1, 2, 3, 4], return 4.

public class Solution {
    /**
     * @param A an array of Integer
     * @return  an integer
     */
    public int longestIncreasingContinuousSubsequence(int[] A) {
        // Write your code here
        if(A.length ==0)
            return 0;
        int countA = 0; 
        int countB = 0;
        int max = 0;
        for(int i = 0; i < A.length-1; i++){
            if(A[i] < A[i+1]){
                countA++;
                if(countA > max){
                    max = countA;
                }
                countB = 0;
                
            }else if(A[i] > A[i+1]){
                countB++;
                if(countB > max){
                    max = countB;
                }
                countA = 0;
            }else{
                countA = 0;
                countB = 0;
            }
        }
        return max+1;
    }
    
}