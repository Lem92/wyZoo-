'use strict';

// ---------packages
var gulp                 = require('gulp'),
    include              = require("gulp-include");

var onError = require("./onError");
var route = require("./route")();

gulp.task('js:build', ['js:replace'], function(){
    gulp.src("dev/js/*.js")
        .pipe(include({
            extensions: "js",
            includePaths: [
                route.src.js
            ]
        }))
        .pipe(gulp.dest(route.build.js));
});
