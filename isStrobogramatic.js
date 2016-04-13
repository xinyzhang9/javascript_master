// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to determine if a number is strobogrammatic. The number is represented as a string.

// For example, the numbers "69", "88", and "818" are all strobogrammatic.

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var reverse = num.split("").reverse().join("");
    return helper(num,reverse);
};

var helper = function(a,b){
    for(var x in a){
        if(a[x] === '0' || a[x] === '1' || a[x] === '8'){
            if(b[x] !== a[x])
                return false;
        }else if(a[x] === '6'){
            if(b[x] !== '9')
                return false;
        }else if(a[x] === '9'){
            if(b[x] !== '6')
                return false;
        }else
            return false;
        
    }
    return true;
}