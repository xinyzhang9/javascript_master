// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length === 0 && t.length === 0)
        return true;
    if(s.length !== t.length)
        return false;
    var map = {};
    for(var i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
        }else{
            map[s[i]] += 1;
        }
    }
    
    for(var i = 0; i < t.length; i++){
        if(map[t[i]] === undefined)
            return false;
        else{
            map[t[i]] -= 1;
            if(map[t[i]] < 0)
                return false;
        }
    }
    return true;
};
