{
	// 原始数据
	let obj={
		time:'2017-06-11',
		name:'net',
		_r:123
	}

	let monitor = new Proxy(obj,{
		// ... 对 原始数据 进行 处理过滤 的操作
		get(target,key){ // 代理读取
			return target[key].replace('2017','2018')
		},
		set(target,key,value){ // 代理设置，只允许开放 name属性供编辑
		 	if(key==='name'){
		 		return target[key]=value
		 	}else{
		 		return target[key]
		 	}
		},
		has(target,key){
			if(key==='name'){
				return target[key]
			}else{
				return false
			}
		},
		deleteProperty(target,key){
			if(key.indexOf("_")>-1){
				delete target[key]
				return true
			}else{
				return target[key]
			}
		},

		// 代理 Object.keys; Object.getOwnPropertySymbols, Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter((item)=>{
				return item!='time'?item:false
			})
		}

		
	})
	//Reflect.get(obj,'time',()=>{})
	//console.log('reflect',Reflect.get(obj,'time'),Reflect.has(obj,'_r'))
	//输出 reflect 2017-06-11 true
	//console.log('ownKeys',Object.keys(monitor))
	// delete monitor._r
	// console.log(monitor)
 	//console.log('has:','name' in monitor) // true
	//console.log('has:','time' in monitor) // false
	// //console.log('get:',monitor.time)
	// monitor.name='c#'  // 修改成功
	// monitor.time='9+9999'  // 修改失败
	// console.log('monitor set:',monitor.name,monitor.time)
}

{
	// 创建一个 输出 proxy 对象 的验证处理函数 
	function validator(target,validator){ // validator是验证的标准
		return new Proxy(target,{
			_validator:validator, 
			set(target,key,value,proxy){  // proxy 注册 set 方法用于设置值
				if(target.hasOwnProperty(key)){   // 判断如果 目标对象 存在 set的键
					
					let va = this._validator[key];  // 使用 validator 里面的 对应键值 的 验证函数

					if(!!va(value)){ //验证标准里面对应键的值为真
						return Reflect.set(target,key,value,proxy)
					}else{
						throw Error(`不能设置${key}到${value}`)
					}
				}else{
					throw Error(`${key}不存在`)
				}
			}
		})
	}

	const personValidators={ // 验证的标准
		name(val){
			return typeof val === "string"
		},
		age(val){
			return typeof age ==="number"&&val>18
		}
	}

	class Person{  // 创建一个 类 
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators) // 构造函数 输出一个验证代理proxy，用来咋在创建对象时进行验证
		}
	}

	const person = new Person('lili',30)
	const person2 = new Person('aaa',12)  // 无效 报错


	console.log(person)

}