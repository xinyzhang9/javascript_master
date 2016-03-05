// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, 
// find a path from top left to bottom right which minimizes the sum of all numbers along its path.
public class Solution {
    /**
     * @param grid: a list of lists of integers.
     * @return: An integer, minimizes the sum of all numbers along its path
     */
    public int minPathSum(int[][] grid) {
        // write your code here
        if(grid == null || grid.length == 0 || grid[0].length == 0){
            return 0;
        }
        int m = grid.length;
        int n = grid[0].length;
        int[] res = new int[n];
        res[0] = grid[0][0]; //optimized to one dimision
        //init first row
        for(int i = 1; i < n; i++ ){
            res[i] = res[i-1] + grid[0][i];
        }

        //from second row
        for(int i = 1; i < m; i++){
            for(int j = 0; j < n; j++){
                //init first col of each row, accumulate
                if(j == 0){
                    res[j] += grid[i][j];
                }else{
                    res[j] = Math.min(res[j-1],res[j]) + grid[i][j];
                }
            }
        }
        return res[n-1];
    }
}
