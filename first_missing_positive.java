// Given an unsorted integer array, 
// find the first missing positive integer.
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.


//we like sort the array to be [1,*,3,4]...
public class Solution {
    /**    
     * @param A: an array of integers
     * @return: an integer
     */
    public int firstMissingPositive(int[] A) {
        // write your code here   
        if(A == null || A.length == 0){
            return 1;
        }
        for(int i = 0; i < A.length; i++){
            while(A[i] > 0 && A[i] <= A.length && A[i]!=i+1){
                int tmp = A[A[i]-1];
                if(tmp == A[i]){
                    break;
                }
                A[A[i]-1] = A[i];
                A[i] = tmp;
            }
        }
        for(int i = 0; i < A.length; i++){
            if(A[i]!= i+1){
                return i+1;
            }
        }
        return A.length+1;
    }
}