// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
// Show Tags
// Show Similar Problems

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    if(numRows < 1){
        return res;
    }
    if(numRows == 1){
        res.push([1]);
        return res;
    }else if(numRows == 2){
        res.push([1]);
        res.push([1,1]);
        return res;
    }else{
        res.push([1]);
        res.push([1,1]);
        for(var i = 3; i <= numRows; i++){
            var tmp = [];
            tmp.push(1);
            for(var j = 0; j < res[i-2].length-1; j++){
                tmp.push(res[i-2][j]+res[i-2][j+1]);
            }
            tmp.push(1);
            res.push(tmp);
        }
    }
    return res;
    
};
