function fmp(arr){
	if(arr == null || arr.length == 0){
		return 1;
	}
	for(var i = 0; i < arr.length; i++){
		while(arr[i]>0 && arr[i] <= arr.length && arr[i] != i+1){
			var tmp = arr[arr[i]-1];
			if(tmp == arr[i]){
				break;
			}
			arr[arr[i]-1] = arr[i];
			arr[i] = tmp;
		}
		//test
		for(var j = 0; j < arr.length; j++){
			console.log(arr[j]);
		}
		console.log("---")
	}
	
	

	for(var i = 0; i < arr.length; i++){
		if(arr[i] != i+1){
			return i+1;
		}
	}
	return arr.length+1;
}

var arr = [3,4,-1,1];
console.log(fmp(arr));