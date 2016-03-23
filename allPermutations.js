function allPermutations(str){
	if(!str){
		return null;
	}
	var str = str.split('');
	var stack = [];
	var res = [];
	perm(str,stack,res);
	console.log('total perms:'+res.length);
	console.log(res);

	return res;
}
function perm(str,stack,res){
	if(str.length == 0){
		stack = stack.join('');
		res.push(stack.slice());
		return;
		
	}
	for(var i = 0; i < str.length; i++){
		console.log('i:'+i);
		var x = str.splice(i,1);
		console.log('x:'+x);
		console.log('str:'+str);
		stack.push(x);
		console.log('stack:'+stack);
		console.log('do perm');
		perm(str,stack,res);
		stack.pop();
		console.log('after pop stack:'+stack);
		console.log('i:'+i);
		str.splice(i,0,x);
		console.log('after splice str:'+str);
		console.log('-------');
	}
}

//demo
allPermutations('abc');