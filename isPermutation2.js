function isPermutation2(str1,str2){
	if(str1.length != str2.length){
		return false;
	}
	arr1 = str1.split('');
	arr2 = str2.split('');
	console.log('arr1: '+arr1);
	console.log('arr2: '+arr2);
	arr1 = arr1.sort();
	arr2 = arr2.sort();
	console.log('arr1: '+arr1);
	console.log('arr2: '+arr2);
	return (JSON.stringify(arr1) == JSON.stringify(arr2));
}
//demo
str1 = 'mister';
str2 = 'isterm';
console.log(isPermutation2(str1,str2));