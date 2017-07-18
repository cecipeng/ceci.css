'use strict';

const gulp = require('gulp');
const fs = require('fs');

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;

const views = require('./views');
const styles = require('./styles');
const scripts = require('./scripts');
const images = require('./images');
const server = require('./server');

function watch(){
	let dirList = fs.readdirSync(c_paths.src);

	dirList.forEach((dir) => {
		if(fs.statSync(c_paths.src + '/' + dir).isDirectory()){
			WatchEvent(gulp.watch(dir + '/**/*.html',{cwd: c_paths.src}),views,server.reload);
			WatchEvent(gulp.watch(dir + '/**/*.{scss,css}', {cwd: c_paths.src}),styles);
			WatchEvent(gulp.watch(dir + '/**/*.js', {cwd: c_paths.src}), scripts,server.reload);
			WatchEvent(gulp.watch(dir + '/**/*.{jpg,png,gif}', {cwd: c_paths.src}), images,server.reload);
		}
	})
}

function WatchEvent(fn, task, action){
	
	var watcher = fn;

	watcher.on('add', function(){
		if(action){
			gulp.series(task,gulp.parallel(action)).apply(this)
		}else{
			gulp.series(task).apply(this)
		}
		
	})

	watcher.on('change', function(){
		if(action){
			gulp.series(task,gulp.parallel(action)).apply(this)
		}else{
			gulp.series(task).apply(this)
		}
	})

	watcher.on('unlink', function(path){
		var reFile = /scss/;
		if(!reFile.test(path)){
			const delPath = c_paths.tmp + '\\' + path;
			fs.unlinkSync(delPath)
		}
		if(action){
			gulp.series(task,gulp.parallel(action)).apply(this)
		}else{
			gulp.series(task).apply(this)
		}
	})
}

module.exports = watch;