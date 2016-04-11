// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    if(s.length < 1)
        return false;
    var dic = {};
    for(var i = 0; i < s.length; i++){
        if(dic[s[i]] === undefined){
            dic[s[i]] = 1;
        }else{
            dic[s[i]] += 1;
        }
    }
    var count = 0;
    for(var x in dic){
        if(dic[x] % 2 === 1)
            count++;
    }
    return count <=1;
};