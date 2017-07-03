{
	let tell =  function*(){
		yield 'a'
		yield 'b'
		yield 'c'
		return false
	}

	let k = tell();
	/*console.log(k)
	console.log(k.next())
	console.log(k.next())
	console.log(k.next())
	console.log(k.next())*/
}

{
	let obj = {}
	obj[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}
	for(let value of obj){
		console.log('value',value)
	}
}