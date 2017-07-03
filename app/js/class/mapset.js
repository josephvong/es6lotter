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
	// console.log('map',map)
	// console.log(map.get(arr))
}

/*{
	let map = new Map()
	let array = []

	// 增
	map.set('t',1)
	array.push({'t':1})
	console.info('map-arr',map,array)

	// 查
	let map_exist = map.has('t');
	let arr_exist = array.find((item)=>{return item.t})
	console.info('map-array',map_exist,arr_exist)

	// 改
	map.set('t',2)
	array.forEach((item)=>{item.t?item.t=2:''})
	console.info('map-arr',map,array)

	// 删
	map.delete('t')
	//数组的删
	let index = array.findIndex((item)=>{item.t})
	array.splice(index,1)
	console.info('map-arr',map,array)

}*/

{
	let item ={t:1}
	let map = new Map()
	let set = new Set()
	let obj = {}

	// 增
	map.set('t',1)
	set.add(item)
	obj['t'] = 1
	console.info('map-set-obj:',map,set,obj)

	// 查
	let m_exist = map.has('t')
	let s_exist = set.has(item) 
	console.info(m_exist,s_exist,'t' in obj)

	// 改
	map.set('t',2)
	item.t =2 // 注意： set 对象 的改，是直接修改 他 引用的对象，若不确定set是否有引用某个对象，只能用 遍历方法来判断

	// 查
	map.delete('t')
	set.delete(item)
	delete obj['t']  // obj 可以 用delete [某个键] 形式来删除
	console.info(obj,map,set)
}








