// Merge two given sorted integer array A and B into a new sorted integer array.
// A=[1,2,3,4]

// B=[2,4,5,6]

// return [1,2,2,3,4,4,5,6]
class Solution {
    /**
     * @param A and B: sorted integer array A and B.
     * @return: A new sorted integer array
     */
    public int[] mergeSortedArray(int[] A, int[] B) {
        // Write your code here
        if (A.length == 0){
            return B;
        }
        if(B.length == 0){
            return A;
        }
        int la = A.length;
        int lb = B.length;
        int[] res = new int[la+lb];
        int i = 0, j = 0,k = 0;
        while(i < la && j < lb){
            if(A[i] < B[j]){
                res[k++] = A[i++];
            }else{
                res[k++] = B[j++];
            }
        }
        while(i < la){
            res[k++] = A[i++];
        }
        while(j < lb){
            res[k++] = B[j++];
        }
        return res;
        
    }
}