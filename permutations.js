// var nextPermutation = function(arr){
// 	var pivot = getPivot(arr)-1;
// 	console.log(pivot);
// 	if(pivot <= -1)
// 		return false;

// 	var eleToSwap = getEletoSwap(arr,pivot);
// 	console.log(pivot);
// 	swap(arr,pivot,eleToSwap);
// 	reverseSuffix(arr,pivot,arr.length-1);
// 	return true;

// }

// var getPivot = function(arr){
// 	var i = arr.length-1;
// 	while(i > 0 && arr[i-1] >= arr[i]){
// 		i--;
// 	}
// 	return i;
// }

// var getEletoSwap = function(arr,pivot){
// 	var j = arr.length-1;
// 	while(arr[j] >= arr[pivot]){
// 		j--;
// 	}
// 	return j;
// }

// var swap = function(arr,i,j){
// 	var tmp = arr[i];
// 	arr[i] = arr[j];
// 	arr[j] = tmp;
// }

// var reverseSuffix = function(arr,i,j){
// 	while(i <j){
// 		swap(arr,i,j);
// 		i++;
// 		j--;
// 	}
// }
function nextPermutation(array) {
    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;
    
    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
    
    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
}


var permutation = function(arr){
	arr.sort();
	var res = [];
	res.push(arr.slice(0));
	while(nextPermutation(arr)){
		var tmp = arr.slice(0);
		res.push(tmp);
	}
	return res;
}

arr = ["a","b","c"];
console.log(permutation(arr));
