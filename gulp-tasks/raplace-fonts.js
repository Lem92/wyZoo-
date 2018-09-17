
var gulp                 = require('gulp'),
    flatten              = require('gulp-flatten'),
    plumber              = require('gulp-plumber');
	
var route = require("./route")();

gulp.task('fonts:build', function() {
    gulp.src(route.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(route.build.fonts));
});