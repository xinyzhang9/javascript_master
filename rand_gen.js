var arr = [];
var arr2 = [];
for(var i = 0; i < 12; i++){
	var r = Math.floor((Math.random() * 8) + 16);
	var r2 = Math.floor((Math.random() * (r-6)) + 6);
	arr.push(r);
	arr2.push(r2);
}

console.log(arr);
console.log(arr2);