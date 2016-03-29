// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0)
        return false;
    if(!matrix[0] || matrix[0].length === 0)
        return false;
    var rows = matrix.length;
    var cols = matrix[0].length;
    var left = 0;
    var right = rows * cols - 1;
    while(left + 1 < right){
        var mid = left + parseInt((right - left)/2);
        var row = parseInt(mid/cols);
        var col = mid % cols;
        if(target ==  matrix[row][col]){
            return true;
        }else if(target < matrix[row][col]){
            right = mid;
        }else{
            left = mid;
        }
    }
    if(target == matrix[parseInt(left/cols)][left % cols]){
        return true;
    }else if(target == matrix[parseInt(right/cols)][right % cols]){
        return true;
    }
    
    return false;
    
    
    
};