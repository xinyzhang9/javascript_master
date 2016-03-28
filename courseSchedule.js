// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

// 2, [[1,0],[0,1]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var nodes = constructGraph(numCourses, prerequisites);
    for(var i = 0; i < nodes.length; i++){
        var hasCycle = dfs(nodes[i],[]);
        if(hasCycle){
            return false;
        }
    }
    return true;
};

//construct graph
var constructGraph = function(numCourses, prerequisites){
    var nodes = [];
    for(var i = 0; i < numCourses; i++){
        var node = {};
        node.neighbors = [];
        nodes[i] = node;
    }
    for(var j = 0; j < prerequisites.length; j++){
        var s = prerequisites[j][1]; //source
        var d = prerequisites[j][0]; //destination
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
    
}

//return true if detected a cycle
var dfs = function(startNode, parents){
    if(parents.indexOf(startNode) >=0){
        return true;
    }
    if(startNode.visited){
        return false;
    }
    startNode.visited = true;
    var neighbors = startNode.neighbors;
    parents.push(startNode);
    for(var i = 0; i < neighbors.length; i++){
        var hasCycle = dfs(neighbors[i],parents);
        if (hasCycle){
            return true;
        }
    }
    parents.pop();
}