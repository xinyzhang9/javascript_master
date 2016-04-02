/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    state = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] == '+')
            state[i] = true;
        else
            state[i] = false;
    }
    return search(state);
};

var search = function(state){
    for(var i = 0; i < state.length-1; i++){
        if(state[i] && state[i+1]){
            state[i] = false;
            state[i+1] = false;
            if(!search(state)){
                state[i] = true;
                state[i+1] = true;
                return true;
            }else{
                state[i] = true;
                state[i+1] = true;
            }
        }
    }
    return false;
}