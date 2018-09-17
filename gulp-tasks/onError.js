var gutil = require('gulp-util'),
    notifier = require('node-notifier');

module.exports = function(err){
	gutil.beep();
	notifier.notify({
		title: 'Something is Wrong!'
	})
	console.log(err.toString());
	this.emit('end');
}