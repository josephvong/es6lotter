// 此命令 来 定义 gulp 的默认执行的命令
import gulp from 'gulp'

gulp.task('default',['build']) // 默认 执行build 任务

// gulp 会默认 default 作为默认的任务名，就是说 在命令行中 只执行gulp，其实是执行gulp default