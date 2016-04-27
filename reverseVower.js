// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(!s || s.length === 0){
        return "";
    }
    var dic = "aeiouAEIOU";
    var arr = s.split('');
    for(var i = 0, j = arr.length-1; i < j; i++,j--){
        while(dic.indexOf(arr[i]) === -1 && i < j){
            i++;
        }
        while(dic.indexOf(arr[j]) === -1 && i < j){
            j--;
        }
        if(i < j){
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        
    }
    
    return arr.join('');
};