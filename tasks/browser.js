//browser 任务： 当启动了 browser 任务后，会自动监听app里面的js文件，如果有变化，自动执行 ‘script’命令

import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'

gulp.task('browser',(cb)=>{
	if (!args.watch) {return cb()}

	gulp.watch('app/**/*.js',['scripts']) // 自动监听 主目录app里面的js文件的变化
	gulp.watch('app/**/*.ejs',['pages']) // 自动监听 主目录app里面的ejs文件(html)的变化
	gulp.watch('app/**/*.css',['css']) // 自动监听 主目录app里面的css文件的变化
})












