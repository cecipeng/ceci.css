'use strict';

const gulp = require('gulp4');
const browserSync = require('browser-sync');
const bsCreate = browserSync.create();

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;

module.exports = {
	reload: bsCreate.reload,
	dev: ()=>{
		bsCreate.init({
			server: {
				baseDir: c_paths.tmp,
				directory: true,
			},
			startPath: c_paths.sitemap
		});
	}
}