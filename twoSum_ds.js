/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
    this.map = {};
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
    if(this.map[input] === undefined){
        this.map[input] = input;
    }else{
        this.map[input]++;
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
    console.log(this.map);
    for(var i in this.map){
        if(this.map[val - this.map[i]] !== undefined){
            if(2*this.map[this.map[i]] === val){
                continue;
            }
            if(this.map[val - this.map[i]] === val - this.map[i]){
                return true;
            }
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */

 var twoSum = new TwoSum();
 twoSum.add(1);
 twoSum.add(2);
 twoSum.add(3);
 console.log(twoSum.find(5));
 console.log(twoSum.find(6));
 console.log(twoSum.find(7));