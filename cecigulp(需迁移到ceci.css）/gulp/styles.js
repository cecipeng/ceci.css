'use strict';

const gulp = require('gulp4');
const sourcemaps = require('gulp-sourcemaps');

//new postcss
const postcss = require('gulp-postcss');
// const precss = require('precss');
const sass = require('gulp-sass');
const alpha = require('postcss-color-rgba-fallback');
const opacity = require('postcss-opacity');
const autoprefixer = require('autoprefixer');
const doiuse = require('doiuse');
const rucksack = require('rucksack-css');
const pxtovw = require('postcss-px-to-viewport');

const conf = require('./config.js');
const c_paths = conf.paths
const c_folders = conf.folders;
const server = require('./server');

const processors = [
	rucksack(), //简写
	// pxtovw({ //px转vw
	// 	viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
	// 	viewportHeight: 1206, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
	// 	unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
	// 	viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
	// 	selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
	// 	minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
	// 	mediaQuery: false // 允许在媒体查询中转换`px`
	// }),
	// doiuse({ //检测属性是否支持XX浏览器
	// 	browsers: ['ie >= 8', '> 1%'],
	// 	ignore: [],
	// 	ignoreFiles: ['**/normalize.css']
	// }),
	alpha(), //兼容IE8rgba
	opacity(), //兼容IE8filter
	autoprefixer({ //加前缀(rucksack已集成)
		browsers: ['> 1%', 'IE >= 7'],
		remove: false
	})
];
function styles(){
	return gulp.src(c_paths.src + '/**/*.{scss, less, css}')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(c_paths.tmp))
		.pipe(server.reload({stream:true}))
}

module.exports = styles;