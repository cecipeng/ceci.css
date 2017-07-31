'use strict';

const gulp = require('gulp');

const views = require('./gulp/views');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const watch = require('./gulp/watch');
const server = require('./gulp/server');
const clean = require('./gulp/clean');
const build = require('./gulp/build');


gulp.task('default', 
	gulp.series(
		clean.clean, 
		views.markdown, 
		gulp.parallel(
			watch, 
			views.views, 
			scripts, 
			styles, 
			images, 
			server.dev
		)
	)
);

gulp.task('dist', 
	gulp.series(
		clean.clean, 
		clean.cleanBuild, 
		views.markdown, 
		gulp.parallel(
			views.views, 
			scripts, 
			styles, 
			images
		), 
		build.views, 
		build.images, 
		build.styles, 
		build.scripts, 
		build.fonts,
		clean.cleanBase64,
		clean.cleanSprites
	)
);


gulp.task('dist:tiny', 
	gulp.series(
		clean.clean, 
		clean.cleanBuild, 
		views.markdown, 
		gulp.parallel(
			views.views, 
			scripts, 
			styles, 
			images
		), 
		build.views, 
		build.imagesTiny, 
		build.styles, 
		build.scripts, 
		build.fonts,
		clean.cleanBase64,
		clean.cleanSprites
	)
);

function gulpTip(tip){
	console.log(tip);
}