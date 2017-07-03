{
	class Parent{  // 声明一个类
		constructor(name='joseph'){ // 定义构造函数
			this.name = name
		}
	}

	let v_parent = new Parent('v')

	//console.log(v_parent)
}
{
	class Parent{
		constructor(name = 'joseph',car){
			this.name = name;
			this.car = car
		}
	}
	let v_parent = new Parent(undefined,'ford')
	//console.log(v_parent)

	class Child extends Parent{
		constructor(name="child",car){
			super(name,car);
			this.type='child';
			this.car = car
		}
	}
	//console.log(new Child(undefined,'nissan')) 
}

{
	class Parent{  // 声明一个类
		constructor(name='joseph'){ // 定义构造函数
			this.name = name
		}

		get longName(){  // 通过‘get’ 定义 对象的读取属性
			return 'mk'+this.name
		}

		set longName(value){
			this.name = value;
		}

		static tell(){
			console.log('tell')
		}
	}
	Parent.tell()
	// let v_parent = new Parent('vo')
	// console.log(v_parent.name)  // vo
	// console.log(v_parent.longName) // mkvo
	// v_parent.longName = 'joseph'  // 设置对象的 longName 属性
	// console.log(v_parent.name)  // joseph 修改后的name 
	// console.log(v_parent.longName) // mkjoseph 
}