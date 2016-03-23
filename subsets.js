function allSubset(str){
	var result = [''],each = [];
	if(str.length == 0){
		return result;
	}
	arr = str.split('');
	while(arr.length > 0){
		var v = arr.pop();
		for(var i = 0; i < result.length;i++){
			var tmp = result[i];
			tmp +=v;
			each.push(tmp);
		}
		result.push.apply(result,each)
		each = [];
	}
	return result;
}

//test
str = "abcd"
console.log(allSubset(str));