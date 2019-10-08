'use strict';

exports.paths = {
	src: 'src',
	tmp: '.tmp',
	dist: 'dist',
	sitemap: 'demo/index.html',
	demo: '/demo',
	component: '/_components'
}

exports.images = {
	base64Path: '/images/_base64', //base64图片存放位置,根目录为dist
	spritesPath: '/images/_sprites' //sprite后的图片存放位置,根目录为dist
}

exports.folders = {
	html: 'views',
	css: 'styles',
	js: 'scripts',
	images: 'images'
}

//sitemap相关配置参数
exports.sitemapOpts = {
	path: ['./src'], //总路径
	htmlFilter: ['./src/module/','views/'], //页面过滤
	modulePath: "./src/module/", //模块路径，未划分模块设置为：false
	tocPath: "./src/demo/pages/", //页面索引文件路径
	// componentFilter: ['_components/'], //组件路径
}