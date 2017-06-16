import gulp from 'gulp'
import gulpSequence from 'gulp-sequence' // 用于处理任务队列的包


//定义build 命令： 将所有的 gulp任务脚本 按照一个顺序来进行排列执行
//build命令的定义： 使用 gulpSequence() 函数将 所有的命令进行排序

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']))
// 上述代码里面gulpSequence()定义了以下的 命令执行顺序：
// 1.清空，2.更新css 3.更新视图模块 4.更新 script 5. 最后的一个数组表示 browser 先执行，然后再执行server
