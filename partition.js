//partition_array
function partition(nums,l,r){
	if(l == r){
		return l;
	}
	var num = nums[r];
	var index = l;
	for(var i = l; i < r; i++){
		if(nums[i] >=num){
			var tmp = nums[i];
			nums[i] = nums[index];
			nums[index] = tmp;
			index +=1;
		}
	}
	nums[r] = nums[index];
	nums[index] = num;
	console.log(nums);
	return index;
}

//demo
var arr = [9,3,2,4,8];
var res = partition(arr,0,4);
console.log(res);