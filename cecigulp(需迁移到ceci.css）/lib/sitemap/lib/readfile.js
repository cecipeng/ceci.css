'use strict';

const fs = require('fs');
const parse2json = require('./parse2json');

const RegArr = { // 定义匹配规则
	fileType: /\/.*\.(.*)/, // 文件类型匹配
	html: /<\!--sitemap:(\{.*\})-->/, // html文件的规则获取
	css: /\/\*sitemap:(\{.*\})\*\//, // css文件的规则获取
	scss: /\/\/sitemap:(\{.*\})/, // scss文件的规则获取
	js:/\/\/sitemap:(\{.*\})/ // js文件的规则获取
}

function readFile(path){ // 读取文本内容
	let _content = fs.readFileSync(path,{encoding: 'utf8'}); // 获取文本内容
	let fileType = RegArr.fileType.exec(path); // 匹配文件类型

	if(fileType !== null){
		const getOpt = RegArr[fileType[1]].exec(_content); // 获取配置信息
		if(getOpt !== null){
			let optObj = parse2json(getOpt[1]); // 将字符串转换为json
			return optObj
		}
	}
}

exports.readFile = readFile