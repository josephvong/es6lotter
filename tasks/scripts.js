// 定义 用gulp 来处理 js 模块文件的 命令

import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload'; // gulp 热刷新
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import {log,colors} from 'gulp-util'
import args from './util/args'



gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js']) // 打开 入口js文件 index.js
		.pipe(plumber({									// 错误处理
			errorHandle:function(){

			}
		}))
		.pipe(named())   // 重命名处理
		.pipe(gulpWebpack({   //webpack 编译（用 babel loader）
			module:{
				loaders:[
					{
						test:/\.js$/,
						loader:'babel'
					}
				]
			}
		}),null,(err,states)=>{
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({chunks:false}))
		})
		.pipe(gulp.dest('server/public/js'))  // 编译完成后 将（编译好的）文件放置到server项目下的public文件夹的js文件夹里面
		.pipe(rename({  // 重建 一份 min.js文件
			basename:'cp',
			extname:'.min.js'
		}))
		.pipe(		// 对上面的 min.js文件进行 压缩编译
			uglify({
				compress:{properties:false},
				output:{'quote_keys':true}
			})
		)
		.pipe(gulp.dest('server/public/js')) // 编译完压缩版后，进行放置
		.pipe(gulpif(args.watch,livereload())) // 对文件进行监听，并进行热刷新
})