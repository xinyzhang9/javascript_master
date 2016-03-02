// Given two sorted integer arrays A and B, merge B into A as one sorted array.
// A = [1, 2, 3, empty, empty], B = [4, 5]

// After merge, A will be filled as [1, 2, 3, 4, 5]
class Solution {
    /**
     * @param A: sorted integer array A which has m elements, 
     *           but size of A is m+n
     * @param B: sorted integer array B which has n elements
     * @return: void
     */
    public void mergeSortedArray(int[] A, int m, int[] B, int n) {
        // write your code here
        int ia = m-1, ib = n-1, index = m+n-1;
        while(ia >= 0 && ib >= 0){
            if(A[ia] > B[ib]){
                A[index--] = A[ia--];
            }else{
                A[index--] = B[ib--];
            }
        }
        while(ia >= 0){
            A[index--] = A[ia--];
        }
        while(ib >=0){
            A[index--] = B[ib--];
        }
    }
}