// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
 // 以第i天为分界线，计算第i天之前进行一次交易的最大收益preProfit[i]，和第i天之后进行一次交易的最大收益postProfit[i]，最后遍历一遍，max{preProfit[i] + postProfit[i]} (0≤i≤n-1)就是最大收益。第i天之前和第i天之后进行一次的最大收益求法同Best Time to Buy and Sell Stock I
var maxProfit = function(prices) {
    if(prices.length < 2)
        return 0;
    var left = [];
    var right = [];
    for(var i in prices){
        left[i] = 0;
        right[i] = 0;
    }
    
    var curMin = prices[0];
    for(var i = 1; i < prices.length; i++){
        curMin = Math.min(curMin, prices[i]);
        left[i] = Math.max(left[i-1], prices[i] - curMin);
    }
    
    var curMax = prices[prices.length - 1];
    for(var i = prices.length-2; i >= 0; i--){
        curMax = Math.max(curMax,prices[i]);
        right[i] = Math.max(right[i+1], curMax - prices[i]);
    }
    
    var res = 0;
    for(var i in left){
        res = Math.max(res, left[i] + right[i]);
    }
    
    return res;
    
};