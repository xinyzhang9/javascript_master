/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var m = haystack.length;
    var n = needle.length;
    if(n === 0)
        return 0;
    if(m < n){
        return -1;
    }
    for(var i = 0; i < m-n+1; i++){
        for(var j = 0; j < n; j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }else{
                if(j === n-1){
                    return i;
                }
            }
        }
    }
    return -1;
};