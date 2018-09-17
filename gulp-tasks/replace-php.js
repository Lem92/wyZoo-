
var gulp                 = require('gulp'),
flatten              = require('gulp-flatten'),
plumber              = require('gulp-plumber');

var route = require("./route")();

gulp.task('php:replace', function() {
gulp.src(route.src.php)
    .pipe(plumber())
    .pipe(gulp.dest(route.build.php));
});