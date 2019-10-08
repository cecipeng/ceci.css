'use strict';

const gulp = require('gulp4');

const views = require('./gulp/views');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const other = require('./gulp/other');
const watch = require('./gulp/watch');
const server = require('./gulp/server');
const clean = require('./gulp/clean');
const build = require('./gulp/build');

const sitemap = require('./lib/sitemap');

const conf = require('./gulp/config');
const sitemapOpts = conf.sitemapOpts;

gulp.task('sitemap', function(cb){
	sitemap(sitemapOpts);
	cb();
});

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
			other, 
			server.dev,
			'sitemap'
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
			images,
			other, 
			'sitemap'
		), 
		build.views, 
		// build.images, 
		build.styles, 
		build.scripts, 
		build.fonts,
		build.other,
		clean.cleanBase64,
		clean.cleanSprites,
		clean.cleanDemo,
		clean.cleanComponents
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
			images,
			other, 
			'sitemap'
		), 
		build.views, 
		build.imagesTiny, 
		build.styles, 
		build.scripts, 
		build.fonts,
		build.other,
		clean.cleanBase64,
		clean.cleanSprites,
		clean.cleanDemo,
		clean.cleanComponents
	)
);
