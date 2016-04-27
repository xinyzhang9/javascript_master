/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    if(A.length === 0 || A[0].length === 0 || B.length === 0 || B[0].length === 0)
        return null;
        
    var res = [];
    for(var i = 0; i < A.length; i++){
        var line = [];
        for(var j = 0; j < A[0].length; j++){
            var sum = 0;
            for(var q = 0; q < A[0].length; q++){
                sum += A[i][q]*B[q][j];
            }
            if(!isNaN(sum)){
                line.push(sum);    
            }
        }
        res.push(line.slice());
    }
    return res;
};