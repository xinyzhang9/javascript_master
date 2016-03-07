// Triangle
// Given a triangle, find the minimum path sum from top to bottom. 
// Each step you may move to adjacent numbers on the row below.

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]

// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

public class Solution {
    /**
     * @param triangle: a list of lists of integers.
     * @return: An integer, minimum path sum.
     */
    public int minimumTotal(int[][] triangle) {
        // write your code here
        if(triangle.length == 1){
            return triangle[0][0];
        }
        int[] dp =  new int[triangle.length];
        for(int i=0; i<triangle[triangle.length-1].length;i++){
            dp[i]=triangle[triangle.length-1][i];
        }
        for(int i = triangle.length-2; i>=0; i--){
            for(int j = 0; j < triangle[i].length; j++){
                dp[j] = Math.min(dp[j],dp[j+1])+triangle[i][j];
            }
        }
        
        return dp[0];
        
    }
}
