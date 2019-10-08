'use strict';

const gulp = require('gulp4');

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;

function other(){
	return gulp.src(c_paths.src +'/**/*.{mp4,mp3,webm}')
		.pipe(gulp.dest(c_paths.tmp))
}

module.exports = other;