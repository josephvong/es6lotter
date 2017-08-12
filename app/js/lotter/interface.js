// 接口 类 ， 用来封装 处理 接口的

import $ from 'jquery'

class Interface{ 
	//interface 类 有以下方法 ：
	/* 
	* getOmit 获取遗漏的数据
	* @param {string} issue 当前期号 （参数 字符串 当前期号） 
	*/
	getOmit(issue){ // 获取遗漏 的 接口
		let self =  this;  // Interface 类自身的引用
		return new Promise((resolve,reject)=>{  // 输出 promise 代理回调函数
			$.ajax({
				url:'/get/omit',  // 服务器 提供的 接口
				data:{
					issue:issue  // 提交的数据
				},
				dataType:'json',
				success:function(res){ // jquery ajax 的回调
					self.setOmit(res.data)  // interface类 的另一个 omit数据 处理函数 （设置保存数据）
					resolve.call(self,res) // resolve为成功时执行的函数 需要用 call() 把this指向interface类本身
				},
				error:function(err){
					reject.call(err);
				}
			})
		})
	}

	/* 
	* getOpenCode 获取开奖号码的数据
	* @param {string} issue 当前期号 （参数 字符串 当前期号） 
	*/
	getOpenCode(issue){
		let self = this
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/opencode',  // 服务器 提供的 接口
				data:{
					issue:issue  // 提交的数据
				},
				dataType:'json',
				success:function(res){
					self.setOpenCode(res.data)  // 同样，调用 interface 类的另一个函数，保存 开奖号码函数，用作进行修改
					resolve.call(self,res);	
				},
				error:function(err){
					reject.call(err);
				}
			})
		})
	}
	// 解析：上面 setOpenCode  和  setOmit 都是 interface类的函数，但他们都并不需要真正定义， 
	// set方法 是 在get方法执行后，获取到数据后 对数据的一个保存在类里面的 一个 方法
	// 使用：例如 let Inter = new Interface() 创建一个实例后，Inter.getOmit(0000)获取到数据，可以直接通过 Inter.setOmit() 对数据进行更改  

	/*
	* 获取当前 状态 函数
	* 参数同样为 issue （期号） 
	*/
	getState(issue){
		let self = this
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/state',  // 服务器 提供的 接口
				data:{
					issue:issue  // 提交的数据
				},
				dataType:'json',
				success:function(res){ //此 状态获取数据后，数据无需保存在类中（不是类的常规数据）
					// 返回的数据 由 后续的逻辑来处理，interface 自身不去保存 state数据
					resolve.call(self,res);	
				},
				error:function(err){
					reject.call(err);
				}
			})
		})
	}
}

export default Interface