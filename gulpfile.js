var gulp = require('gulp');
var flatten = require('gulp-flatten');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var series = require('stream-series');
var gutil = require('gulp-util');

gulp.task('import-scripts',function(){
	gulp.src(['bower_components/**/*.min.js'])
	.pipe(flatten())
	.pipe(gulp.dest('app/assets/js/'));
});

gulp.task('import-css',function(){
	gulp.src('bower_components/**/*.min.css')
	.pipe(flatten())
	.pipe(gulp.dest('app/assets/css/'));
});

gulp.task('inject-scripts',function(){
	var ang = gulp.src(['./app/assets/js/angular.min.js'], {read:false});
	var jq = gulp.src(['./app/assets/js/jquery.min.js'], {read:false});
	var angularLibsStream = gulp.src(['./app/assets/js/*js','!./app/assets/js/angular.min.js','!./app/assets/js/jquery.min.js'], {read:false});
	var appStream = gulp.src(['./app/**/*app.js'], {read:false});
	var servicesStream = gulp.src(['./app/**/*service.js'], {read:false});
	var controllersStream = gulp.src(['./app/**/*controller.js'], {read:false});
	var directivesStream = gulp.src(['./app/**/*directive.js'], {read:false});	
	var filtersStream = gulp.src(['./app/**/*filter.js'], {read:false});

	return gulp.src('app/index.html')
	.pipe(inject(series(ang, jq ,angularLibsStream, appStream, servicesStream, controllersStream, filtersStream, directivesStream),{relative:true}))
	.pipe(gulp.dest('./app'));
});

gulp.task('inject-css',function(){
	var css = gulp.src(['./app/assets/css/*.min.css'], {read:false});
	return gulp.src('app/index.html')
	.pipe(inject(series(css),{relative:true}))
	.pipe(gulp.dest('./app'));
});

gulp.task('watch',function(){
	gulp.watch('app/**/*',['reload']);
});

gulp.task('reload',function(){
	gulp.src(['app/**/*'])
	.pipe(connect.reload())
});

gulp.task('connect',function(){
	connect.server({
		root: './app',
		livereload: true
	})
});

gulp.task('run',['import-scripts','import-css','inject-css','inject-scripts','connect','watch']);