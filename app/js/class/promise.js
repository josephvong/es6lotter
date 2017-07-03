{
	// promise all
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img')
			img.src= src;
			img.onload=function(){
				resolve(img)
			}
			img.onerror=function(){
				reject(img)
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach((img)=>{
			document.body.appendChild(img)
		})
	}
	/*Promise.all([
		loadImg('http://szimg.mukewang.com/592e2eab0001302505660314-280-160.jpg'),
		loadImg('http://szimg.mukewang.com/58fea8780001f29c05400300-280-160.jpg'),
		loadImg('http://szimg.mukewang.com/582ac41a0001d3c705400300-280-160.jpg')
	]).then(showImgs)*/
}

{
	//promise race
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img')
			img.src= src;
			img.onload=function(){
				resolve(img)
			}
			img.onerror=function(){
				reject(img)
			}
		})
	}

	function showImgs(img){
		let p = document.createElement('p')
		p.appendChild(img)
		document.body.appendChild(p)
		
	}

	Promise.race([
		loadImg('http://szimg.mukewang.com/592e2eab0001302505660314-280-160.jpg'),
		loadImg('http://szimg.mukewang.com/58fea8780001f29c05400300-280-160.jpg'),
		loadImg('http://szimg.mukewang.com/582ac41a0001d3c705400300-280-160.jpg')
	]).then(showImgs)
}