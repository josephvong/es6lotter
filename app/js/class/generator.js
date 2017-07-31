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

{	// 使用 generator 创建遍历接口
	let obj = {}
	obj[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}
	/*for(let value of obj){
		console.log('value',value)
	}*/
}

{	// 使用 generator 模拟前端状态机
	let state = function*(){
		while(1){
			yield 'a'
			yield 'b'
			yield 'c'
		}
	}
	let status = state()
	// console.log(status.next().value) // a
	// console.log(status.next().value) // b
	// console.log(status.next().value) // c
	// console.log(status.next().value) // a
	// console.log(status.next().value) // b
	// console.log(status.next().value) // c
	// 不断循环 

}
{
	// 使用 async /await 模拟前端状态机 (generator 语法糖) 需要 安装 polyfill
	/*let state = async function (){
		while(1){
			await 'a'
			await 'b'
			await 'c'
		}
	}
	let status = state()
	console.log(status.next()) // a 
	// 不断循环 */
}

{
	let draw = function(count){
		let RandomNum = Math.floor(Math.random()*10);
		if(RandomNum == 2){
			console.log('中奖')
		}else{
			console.log('谢谢参与')
		} 
		console.log(`剩余${count}次`)
	}

	let residue = function*(count){
		while(count>0){
			count --;
			yield draw(count)
		}
	}
	let star = residue(5);
	document.querySelector('#star').addEventListener('click',function(){
		star.next()
	},false)
}