function solution(arr){
	var pathArr = [];
	var visited = [];
	var res = [];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[0].length; j++){
			visited.push(false);
		}
	}
	findPath(arr,0,0, pathArr,[]);
	console.log('path array');
	console.log(pathArr);
	for(var x in pathArr){
		pathArr[x].sort(function(a,b){return a-b});
	}
	console.log('path array after sort');
	console.log(pathArr);
	for(var x in pathArr){
		res.push(pathArr[x][0]);
	}
	return res.sort(function(a,b){return b-a})[0];

	function findPath(arr,i,j,pathArr,curPath){
		if(i >= arr.length || j >= arr[0].length)
			return;
		if(i === arr.length-1 && j === arr[0].length-1){
			curPath.push(arr[i][j]);
			pathArr.push(curPath.slice(0));
			curPath.pop();
			return;
		}
		if(visited[i*arr[0].length + j] === false){
			visited[i*arr[0].length + j] = true;
			curPath.push(arr[i][j]);
			findPath(arr,i+1,j,pathArr,curPath);
			findPath(arr,i,j+1,pathArr,curPath);
			visited[i*arr[0].length + j] = false;
			curPath.pop();
		}
	}
}

var arr = [[4,5,6],[1,2,3],[7,8,9]];
console.log("array is ");
console.log(arr);

console.log("answer is " + solution(arr));

