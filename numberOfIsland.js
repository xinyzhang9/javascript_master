// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    var count = 0;
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++;
                merge(grid,i,j);
            }
        }
    }
    return count;
};

var merge = function(grid,i,j){
    if(i < 0 || i > grid.length-1 || j < 0 || j > grid[0].length-1){
        return;
    }
    if(grid[i][j] === '1'){
        grid[i][j] = '0';
        merge(grid,i-1,j);
        merge(grid,i+1,j);
        merge(grid,i,j-1);
        merge(grid,i,j+1);
    }
}