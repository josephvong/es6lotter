import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server' //服务器启动脚本
import args from './util/args'

gulp.task('server',(cb)=>{
	if(!args.watch) return cb();

	//liveserver.new(arr) 是启动给gulp注册一个服务器文件（来控制） 参数为数组：
	var server = liveserver.new(['--harmony','server/bin/www']);//--harmony 表示在当前环境下执行--harmony的脚本
	// 第二个参数 ‘server/bin/www’ 是express 手脚架里创建的 server文件

	server.start()  // 开启服务器

	//让 服务器下的文件 在改变的时候，浏览器能够自动刷新
	gulp.watch(['server/public/**/*.js','server/public/**/*.css','server/views/**/*.ejs'],function(file){
	// 监听server/public里面的js文件 和 server/views里面的ejs模板文件 (还有/public/里面的样式文件 )
		server.notify.apply(server,[file]); //如果有改变，服务器用notify.apply()方法刷新页面
	})

	// 如果 路由 js 发生改变，和 服务器自身 app.js 发生改变 ，需要重启服务器
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()
	})

})