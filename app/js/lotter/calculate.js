/*计算 号码 的 总类*/

class Calculate{
	/*
		computeCount 计算注数
		@param {number} active [当前选中号码 个数]
		@param {string} play_name [ 当前玩法的标示（任1 任2 r1 r2）]
	*/
	computeCount(active,play_nname){
		let count  = 0;
		const exist = this.play_list.has(play_name) // 判断 playlist 里面有没有play_name
		const arr = new Array(active).fill('0') // 创建一个 与 选中代码个数 一直的数组，并用 0 填充
		if(axist && play_name.at(0)=='r'){
			count = Calculate.combine(arr,play_name.split('')[1]) // 调用 本类中的静态函数 combin 从新定义count变量
		}
		return count;
	}


	static combin(arr,size){
		let allResult = [];
		(function f(arr,size,result){
			let arrLen = arr.length;
			if(size>arrLen){
				return;
			}
			if(size === arrLen){
				allResult.push([].concat(result,arr))
			}else{
				for (var i = 0; i < arrLen; i++) {
					let newResult = [].concat(result);
					newResult.push(arr[i]);
					if(size ===1){
						allResult.push(newResult)
					}else{
						let newArr = [].concat(arr);
						newArr.splice(0,i+1);
						f(newArr,size-1,newResult)
					}
				}
			}
		})(arr,size,[])
	}

}
