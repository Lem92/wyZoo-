
var gulp                 = require('gulp'),
    flatten              = require('gulp-flatten'),
    browserSync          = require("browser-sync"),
    plumber              = require('gulp-plumber');
	
var route = require("./route")();

gulp.task('data:replace', function() {
    gulp.src(route.src.data)
        .pipe(plumber())
        .pipe(flatten({ includeParents: 0}))
        .pipe(gulp.dest(route.build.data))
        .on('end', browserSync.reload);
});