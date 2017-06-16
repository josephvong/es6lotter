// 定义 用gulp 来处理 样式 模块文件的 命令

import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'; // gulp 热刷新
import args from './util/args'

gulp.task('css',()=>{
	return gulp.src('app/**/*.css') // 打开app目录下的所有 css文件
		.pipe(gulp.dest('server/public')) // 放到 server/public 目录下面
		.pipe(gulpif(args.watch,livereload()))  // 监听并且进行热加载
})
