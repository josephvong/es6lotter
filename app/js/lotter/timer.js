// 创建 倒计时类
// 类功能： 每个一秒 更新一次剩余时间并输出
class Timer{
	countdown(end,update,handle){ // 类 的倒计时函数,参数：到期时间点，更新中的回调fn，到期的回调fn
		const now  = new Date().getTime(); // 当前时间戳

		const This = this;  //类 自己的 指针

		if(now-end){ // now<end 时间到
			handle.call(This) // 执行回调（并绑定到自己）
		}else{
			let last_time = end-now  // 剩余时间

			const px_d = 1000*60*60*24  // 日的总毫秒数
			const px_h = 1000*60*60     // 小时总毫秒数
			const px_m = 1000*60		// 分总毫秒数
			const px_s = 1000 			// 秒毫秒数
			
			let d = Math.floor(last_time/px_d)
			let h = Math.floor((last_time-d*px_d)/px_h)
			let m = Math.floor((last_time-d*px_d-h*px_h)/px_m)
			let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s)

			let r = [];
			if(d>0){
				r.push(`<em>${d}</em>天`)
			}
			if(r.length>0 || h>0){
				r.push(`<em>${h}</em>时`)
			}
			if(r.length>0 || m>0){
				r.push(`<em>${m}</em>分`)
			}
			if(r.length>0 || s>0){
				r.push(`<em>${s}</em>秒`)
			}
			This.last_time = r.join(''); // 把剩余时间的格式输出 作为 类的 ‘last_time’属性输出
			update.call(self,r.join('')); // 在倒计时过程中 调用 ‘update’回调，参数为 输出剩余时间格式
			
			setTimeout(function(){		// 延时1秒后 递归执行自身 countdown
				self.countdown(end,update,handle);
			},1000)
		}
	}
}

export default Timer