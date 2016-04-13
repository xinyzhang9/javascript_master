function diag(arr){
	var res = [];
	for(var i = 0; i < arr.length + arr[0].length-1; i++){
		res.push([]);
	}

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[0].length; j++){
			res[i+j].push(arr[i][j]);
		}
	}
	return res;
}

var arr = [
			[1,2,3,4],
			[5,6,7,8],
			[9,10,11,12],
];

console.log(diag(arr));