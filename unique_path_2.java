// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

public class Solution {
    /**
     * @param obstacleGrid: A list of lists of integers
     * @return: An integer
     */
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        // write your code here
       int m = obstacleGrid.length;
       int n = obstacleGrid[0].length;
       if(m == 0 || n == 0){
           return 0;
       }
       if(obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] ==1){
           return 0;
       }
       
       int[][] dp = new int[m][n];
       dp[0][0] = 1;
       for(int i = 1; i < m; i++){
           if(obstacleGrid[i][0] == 1){
               dp[i][0] = 0;
           }else{
               dp[i][0] = dp[i-1][0];
           }
       }
       for(int j = 1; j < n; j++){
           if(obstacleGrid[0][j] == 1){
               dp[0][j] = 0;
           }else{
               dp[0][j] = dp[0][j-1];
           }
       }
       for(int i = 1; i < m; i++){
           for(int j = 1; j < n; j++){
               if(obstacleGrid[i][j] == 1){
                   dp[i][j] = 0;
               }else{
                   dp[i][j] = dp[i-1][j] + dp[i][j-1];
               }
           }
       }
       return dp[m-1][n-1];
    }
}