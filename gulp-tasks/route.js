module.exports = function(){
    var route = {
		main:  {},
		src:   {},
		build: {},
		watch: {},
		clean: {},
	}
	route.main.src             = 'dev/';
	route.main.build           = 'dist/';
	route.main.assets          = route.main.build    + 's/';
	route.main.php			   = route.main.build    + 'php/';
	// search develop files
	route.src.pug              = route.main.src      + 'templates/';
	route.src.pugFiles         = route.src.pug       + '**/*.jade';
	route.src.js               = route.main.src      + 'js/';
	route.src.jsFiles          = route.src.js        + '**/*.js';
	route.src.componentsJs     = route.src.js        + 'components/**/*.js';
	route.src.styles           = route.main.src      + 'scss/';
	route.src.stylesFiles      = route.src.styles    + '**/*.scss';
	route.src.componentsStyles = route.src.pug       + '_includes/components/**/*.scss';
	route.src.images           = route.main.src      + 'images/';
	route.src.imagesFiles      = route.src.images    + '**/*.*';
	route.src.videos           = route.main.src      + 'media/**/*.*';
	route.src.fonts            = route.main.src      + 'fonts/**/*.*';
	route.src.data             = route.main.src      + 'data/**/*.*';
	route.src.php			   = route.main.src      + 'php/*.php';
	// watch develop files
	route.watch.pugFiles       = route.src.pugFiles;
	route.watch.styles         = route.src.stylesFiles;
	route.watch.js             = route.src.jsFiles;
	route.watch.images         = route.src.imagesFiles;
	route.watch.videos         = route.src.videos;
	route.watch.fonts          = route.src.fonts;
	// build develop files
	route.build.styles            = route.main.assets + 'css/';
	route.build.js                = route.main.assets + 'js/';
	route.build.js_components     = route.build.js    + 'components/';
	route.build.style_components  = route.src.styles  + '_includes/components/cash/';
	route.build.images            = route.main.assets + 'images/';
	route.build.videos            = route.main.assets + 'media/';
	route.build.fonts             = route.main.assets + 'fonts/';
	route.build.data              = route.main.assets + 'data/';
	route.build.php				  = route.main.php;
	
	return route;
}
// main paths