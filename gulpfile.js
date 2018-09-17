'use strict';

// ---------packages
var gulp                 = require('gulp'),
    requireDir           = require('require-dir');

// ---------paths
var route = require("./gulp-tasks/route")();

// --------- tasks
requireDir('./gulp-tasks');

// ---------build tasks
gulp.task('build', [
    'html:build',
    'style:build',
    'js:replace',
    'data:replace',
    'js:build',
    'fonts:build',
    'svg:build',
    'images:build',
    'videos:build',
    'php:replace'
]);

gulp.task('setWatch', function() {
    global.isWatching = true;
});

// ---------watch tasks
gulp.task('watch', ['setWatch'], function() {
    gulp.watch(route.watch.pugFiles,       ['html:build'] );
    gulp.watch(route.src.componentsStyles, ['style:build']);
    gulp.watch(route.watch.styles,         ['style:build']);
    gulp.watch(route.src.componentsJs,     ['js:replace']);
    gulp.watch(route.watch.js,             ['js:build']   );
    gulp.watch(route.src.imagesFiles,      ['svg:build']);
    gulp.watch(route.src.imagesFiles,      ['images:build']);
    gulp.watch(route.watch.fonts,          ['fonts:build']);
    gulp.watch(route.src.data,             ['data:replace']);
});

gulp.task('default', ['build', 'webserver', 'watch']);
