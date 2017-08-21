'use strict';

var gulp = require('gulp4');
var del = require('del');

var conf = require('./config.js');
var c_paths = conf.paths;
const c_images = conf.images;

function clean(){
	return del(c_paths.tmp)
}

function cleanBuild(){
	return del(c_paths.dist)
}

function cleanBase64(){
	return del(c_paths.dist+"/**"+c_images.base64Path)
}

function cleanSprites(){
	return del(c_paths.dist+"/**"+c_images.spritesPath)
}

module.exports = {
	clean: clean,
	cleanBuild: cleanBuild,
	cleanBase64: cleanBase64,
	cleanSprites: cleanSprites
}