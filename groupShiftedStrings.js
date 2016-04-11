/**
 * @param {string[]} strings
 * @return {string[][]}
 */

 //output order may be different
var groupStrings = function(strings) {
    if(!strings || strings.length === 0){
        return [];
    }
    var res = [];
    var used = [];
    for(var i = 0; i < strings.length; i++){
        used.push(false);
    }
    for(var i = 0; i < strings.length; i++){
        var tmp = [];
        for(j = i; j < strings.length; j++){
            if(strings[j].length === strings[i].length && validshift(strings[j],strings[i]) && !used[j]){
                tmp.push(strings[j]);
                used[j] = true;
            }
        }
        if(tmp.length > 0)
            res.push(tmp);
    }
    return res;
};

var validshift = function(a,b){
    if(a.length !== b.length)
        return false;
    for(var i = 0; i < a.length-1; i++){
        if((a.charCodeAt(i)-a.charCodeAt(i+1)+26) % 26 !== (b.charCodeAt(i)-b.charCodeAt(i+1)+26) % 26)
            return false;
    }
    return true;
}