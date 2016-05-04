/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.map = {};
    for(var i in words){
        if(this.map[words[i]] === undefined){
            this.map[words[i]] = [];
            this.map[words[i]].push(parseInt(i));
        }else{
            this.map[words[i]].push(parseInt(i));
        }
        
    }
    console.log(this.map);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var arr1 = this.map[word1];
    var arr2 = this.map[word2];
    var i = 0, j = 0, distance = Math.abs(arr1[0] - arr2[0]);
    while(i < arr1.length && j < arr2.length){
        distance = Math.min(distance, Math.abs(arr1[i]-arr2[j]));
        if(arr1[i] < arr2[j])
            i++;
        else
            j++;
        console.log(i,j);
    }
    return distance;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */

var words = ["this","is","a","long","run","sentence","is","fun","day","today","sunny","weather","is","a","day","tuesday","this","sentence","running","rainy"]
var wordDistance = new WordDistance(words);
console.log(wordDistance.shortest("this","sentence"));