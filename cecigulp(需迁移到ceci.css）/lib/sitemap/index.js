'use strict';

const walk = require("./lib/walk");
const fs = require('fs');

/**
 * [接口函数]
 * @param  {[Object]} opts    [相关配置参数]
 * @return {[array]}         [包含文件名和路径的对象]
 */
function sitemap(opt) {
	let _fileList = []; //原始文件
	let _htmlList = []; //过滤后的html
	let _htmlString = ""; //html片段

	//获取指定路径下的目录结构：获取组件信息
	_fileList = walk.createFileWalk(opt.path, "");

	// 数据处理
	_htmlList = controlSiteMap(_fileList,opt);

	// 写入文件
	_htmlList.forEach((item) => {
		controlFile(item,opt);
	})
}


/**
 * [数据处理]
 * @param  {[Object]} opts    [相关配置参数]
 * @return {[array]}         [包含文件名和路径的对象]
 */
function controlSiteMap(fileList,opt){
	const _htmlList = [];
	const _module = []; //模块名称
	const _result = []; //处理结果
	// const _componentList = [];

	//过滤html：根据filter过滤出指定文件夹内的html
	fileList.forEach((item) => {
		let isHtml = false;
		isHtml = opt.htmlFilter.every(function(x){
			return item.path.search(x)>=0
		})
		if(isHtml && item.filename.search(/\.html$/)>=0 && item.path.search(/_include/)<0 ) {
			_htmlList.push(item);
		}
	});

	//过滤components：根据filter过滤出指定文件夹内的组件
	// fileList.forEach((item) => {
	// 	for(var i=0;i<opt.componentFilter.length;i++){
	// 		const filter = opt.componentFilter[i];
	// 		if(item.path.search(filter)>=0 && item.filename.search(/\.html$/)>=0 && item.path.search(/doc/)<0 ) {
	// 			_componentList.push(item);
	// 			break;
	// 		}
	// 	}
	// });

	//划分模块
	if(opt.modulePath === false) {
		return _htmlList;
	}
	else {
		//取出模块名称
		var _m=[];
		_htmlList.forEach((item) => {
			_m.push(item.path.replace(opt.modulePath,'').split("/")[0]);
		});
		for(var i=0;i<_m.length;i++){  
			
			if(_module.indexOf(_m[i])==-1) {  
				_module.push(_m[i]);
			}  
		}

		//按模块重组结构
		_module.forEach((mode,index) => {
			_result.push({
				"name":mode,
				"pagelist":[]
			});
			_htmlList.forEach((item) => {
				if(item.path.search(opt.modulePath + mode)>=0) {
					_result[index].pagelist.push(item);
				}
			});
		});
	}

	return _result;
}


/**
 * [文件操作]
 * @param  {[Object]} opts    [相关配置参数]
 * @return {[array]}         [包含文件名和路径的对象]
 */
function controlFile(content,opt){
	var _template = "";

	// 读取基础模板
	_template = fs.readFileSync('./lib/sitemap/template.html', 'utf8');
	
	_template += `
		<section class="demo-content__header">
			<h3 class="demo-content__title">${content.name}</h3>
		</section>
		<ul class="demo-page__body">
			<li class="demo-page__head">
				<span class="demo-page__th demo-grid__col-s-5">序号</span>
				<span class="demo-page__th demo-grid__col-s-19">页面</span>
			</li>
	`;

	content.pagelist.forEach((item,index) => {
		const path = item.path.replace(/^.\/src/,"../..");
		_template += `
			<li class="demo-page__item">
				<a href="${path}" target="_blank">
					<span class="demo-page__th demo-grid__col-s-5">${index}</span>
					<span class="demo-page__th demo-grid__col-s-19">${item.filename}</span>
				</a>
			</li>
		`;
	})

	_template += `
			</ul>
		</body>
		</html>
	`;

	fs.writeFileSync(opt.tocPath+content.name+'.html', _template, 'utf8');

}

module.exports = sitemap;