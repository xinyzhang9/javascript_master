/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dic = {};
    dictionary.forEach(function(word){
        var abbr = getAbbr(word);
        if(this.dic[abbr] === undefined)
            this.dic[abbr] = word;
    }, this);
    console.log(this.dic);
};

var getAbbr = function(str){
    if(str.length <=2)
        return str;
    return str.charAt(0) + str.length-2 + str.charAt(str.length-1);
}

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
        var abbr = getAbbr(word);
        if(this.dic[abbr])
            return this.dic[abbr] === word;
        return true;
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */

 var vwa = new ValidWordAbbr(["hello"]);
 console.log(vwa.isUnique("healo"));