//这个文件为 自定义 node.js 的命令行 的， 下面定义各种的命令行

import yargs from 'yargs'

const args = yargs
.option('production',{
	boolean:true,
	default:false,
	describe:'min all scripts'
})
.option('watch',{
	boolean:true,
	default:false,
	describe:'watch all files'
})
.option('verbose',{
	boolean:true,
	default:false,
	describe:'log'
})
.option('sourcemaps',{
	describe:'force the creation of sourcemap'
})
.option('port',{
	string:true,
	default:8080,
	describe:'server port'
})
.argv // 此处表示将命令行作为字符串来解析

export default args;


