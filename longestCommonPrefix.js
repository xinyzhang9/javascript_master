/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0){
        return "";
    }
    var pre = strs[0];
    var i = 1;
    while( i < strs.length){
        while(!strs[i].startsWith(pre)){
            pre = pre.slice(0,pre.length-1);
        }
        i++;
    }
    return pre;
};