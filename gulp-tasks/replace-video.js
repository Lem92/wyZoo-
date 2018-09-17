
var gulp                 = require('gulp'),
    flatten              = require('gulp-flatten'),
    plumber              = require('gulp-plumber');
	
var route = require("./route")();
	
gulp.task('videos:build', function() {
    gulp.src(route.src.videos)
        .pipe(plumber())
        .pipe(gulp.dest(route.build.videos));
});