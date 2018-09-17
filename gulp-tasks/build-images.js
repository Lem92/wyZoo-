// ---------packages
var gulp = require('gulp'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	filter = require('gulp-filter'),
	imagemin = require('gulp-imagemin'),
	// imageminJpegtran     = require('imagemin-jpegtran'),
	// pngquant             = require('imagemin-pngquant'),
	// imageminOptipng      = require('imagemin-optipng'),
	file = require('gulp-file'),
	spritesmith = require('gulp.spritesmith'),
	webp = require('gulp-webp');

var onError = require("./onError");
var route = require("./route")();

gulp.task('svg:build', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(gulp.dest(route.build.images));
});

gulp.task('images:opti', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(webp())
		.pipe(filter(function (file) {
			var name = file.path.substring(file.path.lastIndexOf(".") + 1, file.path.length).toLowerCase();
			return name == 'svg' ? false : true;
		}))
		// .pipe(imagemin())
		.pipe(gulp.dest(route.build.images));
});
gulp.task('images:build', function () {
	gulp.src(route.src.imagesFiles)
		.pipe(plumber())
		.pipe(filter(function (file) {
			var name = file.path.substring(file.path.lastIndexOf(".") + 1, file.path.length).toLowerCase();
			return name == 'svg' ? false : true;
		}))
		// .pipe(imagemin())
		.pipe(gulp.dest(route.build.images));
});

gulp.task('sprite:build', function () {
	var spriteData = gulp.src('./dev/images/useful/sprites/theme/not-render/*.*').pipe(
		spritesmith({
			imgName: 'theme-sprite.png',
			cssName: 'theme-sprite.scss',
			imgPath: '../images/useful/sprites/theme/theme-sprite.png',
			algorithm: 'binary-tree',
			padding: 2,
			sort: false
		})
	)
	return spriteData.pipe(gulp.dest('./dev/images/useful/sprites/theme/'));
});