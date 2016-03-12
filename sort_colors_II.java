// Given an array of n objects with k different colors (numbered from 1 to k), 
// sort them so that objects of the same color are adjacent, 
// with the colors in the order 1, 2, ... k.

// Given colors=[3, 2, 2, 1, 4], k=4, your code should sort colors in-place to [1, 2, 2, 3, 4].

class Solution {
    /**
     * @param colors: A list of integer
     * @param k: An integer
     * @return: nothing
     */
    public void sortColors2(int[] colors, int k) {
        // write your code here
        int[] count = new int[k];
        for(int color:colors){
            count[color-1]++;
        }
        int index = 0;
        for(int i=0; i < k; i++){
            while(count[i] > 0){
                colors[index++] = i+1;
                count[i]--;
            }
        }
    }
}