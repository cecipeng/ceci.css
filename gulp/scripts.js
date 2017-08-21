'use strict';

const gulp = require('gulp4');

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;

function scripts(){
	return gulp.src(c_paths.src +'/**/*.js')
		.pipe(gulp.dest(c_paths.tmp))
}

module.exports = scripts;