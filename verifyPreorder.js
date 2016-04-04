/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    if(!preorder || preorder.length < 1){
        return true;
    }
    return helper(preorder,0,preorder.length-1);

};

var helper = function(preorder,start,end){
    if(start+1 > end)
        return true;
    var root = preorder[start];
    var index = start+1;
    while(index <= end && preorder[index] < root){
        index++;
    }
    var mid = index;
    while(index <= end){
        if(preorder[index] < root)
            return false;
        index++;
    }
    var left = helper(preorder,start+1,mid-1);
    var right = helper(preorder,mid,end);
    return left && right;
}