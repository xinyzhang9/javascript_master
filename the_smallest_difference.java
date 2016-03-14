// Given two array of integers(the first array is array A, the second array is array B), 
// now we are going to find a element in array A which is A[i], and another element in array B which is B[j], 
// so that the difference between A[i] and B[j] (|A[i] - B[j]|) is as small as possible, 
// return their smallest difference.

// For example, given array A = [3,6,7,4], B = [2,8,9,3], return 0
public class Solution {
    /**
     * @param A, B: Two integer arrays.
     * @return: Their smallest difference.
     */
    public int smallestDifference(int[] A, int[] B) {
        // write your code here
        Arrays.sort(A);
        Arrays.sort(B);
        int pa = 0;
        int pb = 0;
        int res = Integer.MAX_VALUE;
        while(pa < A.length && pb < B.length){
            if(A[pa] <= B[pb]){
                res = Math.min(res,B[pb]-A[pa++]);
            }else{
                res = Math.min(res,A[pa]-B[pb++]);
            }
        }
        return res;
    }
}
