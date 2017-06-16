// 定义 用gulp 来处理 视图 模块文件的 命令

import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'; // gulp 热刷新
import args from './util/args'

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs') // 打开app 目录下面的所有ejs（生成html的js文件）
		.pipe(gulp.dest('server'))  // 放到 server 目录下面
		.pipe(gulpif(args.watch,livereload())) // 监听并且进行热加载
})











