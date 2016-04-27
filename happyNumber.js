// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {};
    while(map[n] === undefined){
        map[n] = 1;
        n = getSum(getDigits(n));
    }
    return n === 1;
};

var getDigits = function(n){
    var res = [];
    while(n > 0){
        res.push(n % 10);
        n = parseInt(n/10);
    }
    return res;
}

var getSum = function(arr){
    var sum = 0;
    for(var x in arr){
        sum+=arr[x]*arr[x];
    }
    return sum;
}