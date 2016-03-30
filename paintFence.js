// There is a fence with n posts, each post can be painted with one of the k colors.

// You have to paint all the posts such that no more than two adjacent fence posts have the same color.

// Return the total number of ways you can paint the fence.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 // https://leetcode.com/discuss/56173/o-n-time-java-solution-o-1-space
 
var numWays = function(n, k) {
    if(n == 0)
        return 0;
    if(n == 1)
        return k;
    var sameColor = k;
    var diffColor = k*(k-1);
    for(var i = 2; i < n; i++){
        var oldDiffColor = diffColor;
        diffColor = (diffColor + sameColor)*(k-1);
        sameColor = oldDiffColor;
    }
    return diffColor + sameColor;
};