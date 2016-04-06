// A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

// For example, given three people living at (0,0), (0,4), and (2,2):

// 1 - 0 - 0 - 0 - 1
// |   |   |   |   |
// 0 - 0 - 0 - 0 - 0
// |   |   |   |   |
// 0 - 0 - 1 - 0 - 0
// The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.

// Show Hint 
// Show Tags
// Show Similar Problems

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    var ipos = [];
    var jpos = [];
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                ipos.push(i);
                jpos.push(j);
            }
        }
    }
    return getMin(ipos) + getMin(jpos);
};

var getMin = function(arr){
    arr.sort(function(a,b){return a-b}); //need to parse comparable method!
    var res = 0;
    var start = 0;
    var end = arr.length-1;
    while(start < end){
        res += arr[end--] - arr[start++];
    }
    return res;
}
