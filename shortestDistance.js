// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 //O(n)
var shortestDistance = function(words, word1, word2) {
    var idx1 = -1;
    var idx2 = -1;
    var min = 0x7fffffff;
    for(var i in words){
        if(words[i] === word1){
            idx1 = i;
            if(idx2 !== -1){
                min = Math.min(min, idx1 - idx2);
            }
        }
        if(words[i] === word2){
            idx2 = i;
            if(idx1 !== -1){
                min = Math.min(min, idx2 - idx1);
            }
        }
        
    }
    return min;
};