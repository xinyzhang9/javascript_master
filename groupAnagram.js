/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  console.log(hash);
  return hash;
};
var groupAnagrams = function(strs) {
    if(!strs || strs.length < 1)
        return [];
    var res = [];
    var map = {};
    for(var i = 0; i < strs.length; i++){
        var tmp = strs[i].split('').sort().join('');
        console.log(tmp);
        if(map[tmp.hashCode()] === undefined){
            map[tmp.hashCode()] = [];
            map[tmp.hashCode()].push(strs[i]);
        }else{
            map[tmp.hashCode()].push(strs[i]);
        }
    }
    
    for(var x in map){
        if(map[x].length > 0){
            map[x].sort();
            res.push(map[x]);
        }
    }
    return res;
};

var arr = ["and","dan"];
console.log(groupAnagrams(arr));