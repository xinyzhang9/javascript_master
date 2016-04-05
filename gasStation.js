// There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(!gas || !cost || gas.length!==cost.length)
        return -1;
    var n = gas.length;
    var sum = 0;
    var total = 0;
    var res = 0;
    var i = 0;
    while(i < n){
       
        total += gas[i]-cost[i];
        if(sum >= 0){
            sum += gas[i]-cost[i];
            
        }else{
            res = i;
            sum = gas[i]-cost[i];
        }
        i++;
    }
    if(total >= 0)
        return res;
    else
        return -1;
};