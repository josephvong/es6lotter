/*{

	let arr = ['a','b','c','d'];
	let set = new Set(arr)

	for(let key of set.keys()){
		console.log('keys:',key)
	}
	for(let key of set.values()){
		console.log('values:',key)
	}
	for(let [key,value] of set.entries()){
		console.log(key,value)
	} 
	set.forEach((item)=>{
		console.log(item)
	})
}*/


{
	let map = new Map()
	let arr= ['123']

	map.set(arr,456)
	console.log('map',map)
	console.log(map.get(arr))
}








