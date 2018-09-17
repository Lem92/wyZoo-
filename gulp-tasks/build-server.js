"use strict";

var gulp                 = require('gulp'),
    browserSync          = require("browser-sync");
	
var route = require("./route")();

var config = {
    server: {
        baseDir: route.main.build
    },
    host: 'localhost',
    port: 9000,
    reloadDelay: 50,
    open: true
};

gulp.task('webserver', function() {
    browserSync(config);
});