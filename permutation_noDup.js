/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums || nums.length === 0)
        return [];
    var res = [];
    var stack = [];
    nums.sort(function(a,b){return a-b});
    var visited = new Array(nums.length);
    for(var i = 0; i < nums.length; i++)
        visited[i] = false;
    helper(nums,stack,res);
    return res;

    function helper(nums,stack,res){
        if(stack.length === nums.length ){
            var tmp = stack.slice(); 
            res.push(tmp);
            return;
        }
        for(var i = 0; i < visited.length; i++){
            if(!visited[i]){
                if(i > 0 && nums[i] == nums[i-1] && visited[i-1])
                    return;
                visited[i] = true;
                stack.push(nums[i]);
                helper(nums,stack,res);
                stack.pop();
                visited[i] = false;
            }        
        }
    }
};


var arr = [1,2,2];
console.log(permute(arr));