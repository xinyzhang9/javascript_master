/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums || nums.length === 0)
        return [];
    var res = [];
    var stack = [];
    helper(nums,stack,res);
    return res;
};

var helper = function(nums,stack,res){
    if(nums.length === 0){
        var tmp = stack.slice();
        res.push(tmp);
        return;
    }
    for(var i = 0; i < nums.length; i++){
        //need to convert type!
        var x = parseInt(nums.splice(i,1).join(''));
        stack.push(x);
        helper(nums,stack,res);
        stack.pop();
        nums.splice(i,0,x);
    }
}

var arr = [1,2,3];
console.log(permute(arr));