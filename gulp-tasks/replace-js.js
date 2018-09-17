
var gulp                 = require('gulp'),
    flatten              = require('gulp-flatten'),
    browserSync          = require("browser-sync"),
    plumber              = require('gulp-plumber');
	
var route = require("./route")();

gulp.task('js:replace', function() {
    gulp.src("dev/js/*/**/*")
        .pipe(plumber())
        // .pipe(flatten())
        .pipe(gulp.dest(route.build.js))
        .on('end', browserSync.reload);
});
