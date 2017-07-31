'use strict';

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const md = require('gulp-markdown');

const conf = require('./config');
const c_paths = conf.paths;
const c_folders = conf.folders;

function views(){
	return gulp.src(
			[
				c_paths.src +'/**/*.html'
			]
		)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(c_paths.tmp))
}

function markdown(){
	return gulp.src(
			[
				c_paths.src +'/**/*.md'
			]
		)
		.pipe(md())
		.pipe(gulp.dest(c_paths.src))
}

module.exports = {
	views: views,
	markdown: markdown
};