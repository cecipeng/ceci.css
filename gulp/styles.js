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

const conf = require('./config.js');
const c_paths = conf.paths
const c_folders = conf.folders;
const server = require('./server');

const processors = [
	rucksack(), //简写
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