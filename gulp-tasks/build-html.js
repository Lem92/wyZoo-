var gulp                 = require('gulp'),
    browserSync          = require("browser-sync"),
    reload               = browserSync.reload,
    plumber              = require('gulp-plumber'),
    jadeInheritance      = require('gulp-jade-inheritance'),
    jade                 = require('gulp-jade'),
    changed              = require('gulp-changed'),
    cached               = require('gulp-cached'),
    gulpif               = require('gulp-if'),
	filter               = require('gulp-filter');
	
var onError = require("./onError");
var route = require("./route")();

gulp.task('html:build', function() {
    return gulp.src(route.src.pugFiles)
    .pipe(plumber({
      errorHandler: onError
    }))

    //only pass unchanged *main* files and *all* the partials
    .pipe(changed('dist', {extension: '.html'}))

    //filter out unchanged partials, but it only works when watching
    .pipe(gulpif(global.isWatching, cached('jade')))

    //find files that depend on the files that have changed
    .pipe(jadeInheritance({basedir: route.src.pug}))

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    //process jade templates
    // .pipe(plumber({ errorHandler: onError }))
    .pipe(jade({
      pretty: true
    }))
    // concat links, scripts in one publish file without minification
    // .pipe(useref({ searchPath: 'www/' }))
    //save all the files
    .pipe(gulp.dest(route.main.build))
    .on('end', browserSync.reload);
});