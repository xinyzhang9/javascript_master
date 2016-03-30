// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// For example:

// Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(n-1 != edges.length)
        return false;
    var roots = [];
    for(var i = 0; i < n; i++){
        roots[i] = i;
    }
    for(var i = 0; i < edges.length; i++){
        if(find(edges[i][0]) == find(edges[i][1])){ //same root
            return false;
        }
        union(edges[i][0],edges[i][1]);
    }
    return true;
    
    function find(i){
        while(roots[i] != i)
            i = roots[i];
        return i; //finally there is some i = roots[i]
    }

    function union(x,y){
        var i = find(x);
        var j = find(y);
        roots[i] = j;
    }
};

