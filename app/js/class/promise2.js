/*{
	let a = 5;
	new Promise((resolve,reject)=>{
		if(a>10){
			reject('error1')
		}else{
			setTimeout(()=>{
				resolve(100)
			},1000)
		}
	}).then((value)=>{
		console.log("成功"+value)
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve('good')
			},2000)
		}) 
	})
	.then((value)=>{
		console.log(value,'morning')
	})
	.catch((err)=>{
		console.log(err)
	})
}*/

{
	console.log('start')

	Promise.resolve()
		.then(()=>{
			console.log('step 1');
			return Promise.resolve('hello')
		})
		.then((value)=>{
			console.log(value,'world');
			return new Promise((resolve)=>{
				setTimeout(()=>{
					resolve('good')
				},2000)
			})
			/*return Promise.resolve(new Promise((resolve)=>{
				setTimeout(()=>{
					resolve('good')
				},2000)
			})) */
		})
		.then((value)=>{
			console.log(value,'evening')
		})
}
