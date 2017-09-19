'use strict';

const gulp = require('gulp4');
const path = require('path');
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const tinypng = require('gulp-tinypng-nokey');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegoptim = require('imagemin-jpegoptim');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');

const conf = require('./config');
const c_paths = conf.paths;
const c_folders = conf.folders;
const c_images = conf.images;

//new postcss
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sprites = require('postcss-sprites');
const url = require('postcss-url');
const processors = [
	url({
		filter: c_paths.tmp + '/**' + c_images.base64Path + '/*.{jpg,png,gif}',
		url: 'inline'
	}),
	// sprites({
	// 	spritePath: './',
	// 	filterBy: function(image) {
	// 		if (image.url.indexOf('/_sprites')===-1) { //只对_sprites目录下拼图
	// 			return Promise.reject();
	// 		}
	// 		return Promise.resolve();
	// 	},
	// 	spritesmith: {
	// 		algorithm: 'top-down', // 拼图方向。智能binary-tree（默认值），从上到下top-down，从左到右left-right，从左上到右下diagonal，从右上到左下alt-diagonal
	// 		padding: 10 //图片间距，单位：px
	// 	}
	// }),
	cssnano({
		'postcss-zindex': false,
		'postcss-reduce-idents': false
	})
];



function buildViews(){
	return gulp.src(
			[
				c_paths.src +'/**/*.html',
				'!'+c_paths.src +'/**/_*.html'
			] 
		)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cleanCss()))
		.pipe(gulp.dest(c_paths.dist))
}

function buildStyles(){
	return gulp.src(c_paths.tmp +'/**/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(c_paths.dist))
}

function buildScripts(){
	return gulp.src(c_paths.tmp +'/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(c_paths.dist))
}

function buildImages(){
	return gulp.src(c_paths.tmp +'/**/*.{jpg,png,gif}')
		.pipe(imagemin(
			[imageminJpegoptim({
				progressive: true,
				max: 40
			}),imageminPngquant()]
			)
		)
		.pipe(gulp.dest(c_paths.tmp))
		.pipe(gulp.dest(c_paths.dist))
}

function buildImagesTiny(){
	return gulp.src(c_paths.tmp +'/**/*.{jpg,png,gif}')
		.pipe(tinypng())
		.pipe(gulp.dest(c_paths.tmp))
		.pipe(gulp.dest(c_paths.dist))
}

function buildFonts(){
	return gulp.src(c_paths.tmp +'/**/*.{eot,svg,ttf,woff,woff2}')
		.pipe(gulp.dest(c_paths.dist))
	
}

module.exports = {
	views: buildViews,
	styles: buildStyles,
	scripts: buildScripts,
	images: buildImages,
	fonts: buildFonts,
	imagesTiny: buildImagesTiny
};