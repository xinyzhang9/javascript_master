/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1)
        return s;
    var longest = s.slice(0,1);
    for(var i = 0; i < s.length; i++){
        var tmp = helper(s,i,i);
        if(tmp.length > longest.length)
            longest = tmp;
        var tmp = helper(s,i,i+1);
        if(tmp.length > longest.length)
            longest = tmp;
    }
    return longest;
};

var helper = function(s,left,right){
    while(left >=0 && right <= s.length-1 && s[left] === s[right]){
        left--;
        right++;
    }
    return s.slice(left+1,right);
}