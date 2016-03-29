// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

// 4, [[1,0],[2,0],[3,1],[3,2]]
// There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken 
// after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var sorted = [];
    var ans = [];
    var nodes = constructGraph(numCourses, prerequisites);
    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].visited === 0){
            if(dfs(nodes[i],sorted)){ //has cycle
                return [];
            }
        }
    }
    while(sorted.length > 0){
        ans.push(sorted.pop());
    }
    return ans;
};

var constructGraph = function(numCourses, prerequisites){
    var nodes = [];
    for(var i = 0; i < numCourses; i++){
        var node = {};
        node.val = i;
        node.neighbors = [];
        node.visited = 0; //white
        nodes[i] = node;
    }
    for(var j = 0; j < prerequisites.length; j++){
        var s = prerequisites[j][1]; //source
        var d = prerequisites[j][0]; //destination
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
    
};

//return true if cycle detected
var dfs = function(startNode,sorted){
    startNode.visited = 1; //gray
    var neighbors = startNode.neighbors;
    for(var i = 0; i < neighbors.length; i++){
        if(neighbors[i].visited === 1)
            return true; //back edge detected, has cycle
        if(neighbors[i].visited === 0){
            if(dfs(neighbors[i],sorted)){
                return true; 
            }
        }
    }
    sorted.push(startNode.val);
    startNode.visited = 2; //black;
    return false; //no cycle
}

console.log(findOrder(2, [[1,0]]))