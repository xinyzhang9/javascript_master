// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// For example,

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target){
    if(!matrix || matrix.length === 0)
        return false;
    if(!matrix[0] || matrix[0].length === 0)
        return false;
    return find(matrix,0,matrix[0].length-1,target); //right upper corner
};
var find = function(matrix, row, col, target){
    var currentRow = row;
    var currentCol = col;
    while(currentCol >=0 && currentRow <= matrix.length-1){
        if(matrix[currentRow][currentCol] == target){
            return true;
        }else if(target < matrix[currentRow][currentCol]){
            currentCol--;
        }else{
            currentRow++;
        }
    }
    return false;
};

