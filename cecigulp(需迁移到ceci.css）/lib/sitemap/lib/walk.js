'use strict';

const fs = require('fs');
const minimatch = require('minimatch');

const Read = require('./readfile');
let fileList = [];

/**
 * [接口文件，实现指定目录下的文件遍历，最终生成遍历的文件的对象]
 * @param  {[string]} path    [开始遍历的目录路径]
 * @param  {[string | array]} pattern [过滤文件的规则]
 * @return {[array]}         [包含文件名和路径的对象]
 */
function createFileWalk(path, pattern){
	if(Array.isArray(path)){
		path.forEach(function(_path){
			fileWalk(_path, pattern);
		})
	}
	else {
		fileWalk(path, pattern);
	}

	return fileList;
}

/**
 * [遍历文件]
 * @param  {[string]} path    [开始遍历的目录路径]
 * @param  {[string | array]} pattern [过滤文件的规则]
 * @return {[array]}         [包含文件名和路径的对象]
 */
function fileWalk(path, pattern){
	
	let dirList = fs.readdirSync(path);

	dirList.forEach((item)=>{
		if(fs.statSync(path + '/' + item).isDirectory()){
			fileWalk(path + '/' + item, pattern);
		}
		else{
			if(pattern){ // 用户有定义规则时根据规则进行匹配
				if(isMatch(pattern, item)){ 
					fileList.push(paddingFileList(path, item))
				}
			}
			else{ // 没有规则时则默认该目录下的所有文件
				fileList.push(paddingFileList(path, item))
			}
		}
	})
}

/**
 * [过滤文件]
 * @param  {[string | array]}  pattern [过滤文件的规则]
 * @param  {[string]}  file    [文件名]
 * @return {Boolean}         [是否匹配]
 */
function isMatch(pattern, file){ 
	var result = false;
	var isArray = Array.isArray(pattern);
	if(isArray){
		pattern.forEach((type) => {
			if(minimatch(file, type)){ // 通过 minimatch 对文件进行过滤
				result = true;
			}
		})
	}else if(typeof pattern == 'string'){
		result = minimatch(file, pattern)
	}else{
		 throw new Error('isMatch pattern must be string or arrary')
	}
	
	return result
}

/**
 * [创建固定格式的对象]
 * @param  {[string]} path     [文件路径]
 * @param  {[string]} filename [文件名]
 * @return {[object]}          [包含文件名、文件路径的对象]
 */
function paddingFileList(path, filename){
	var tmpObj = {};
	tmpObj['path'] = path + '/' + filename;
	tmpObj['filename'] = filename;
	// tmpObj['option'] = Read.readFile(path + '/' + filename)

	return tmpObj
}

exports.createFileWalk = createFileWalk;