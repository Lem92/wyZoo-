var gulp                 = require('gulp'),
    fs                   = require('fs'),    
    file                 = require('gulp-file'),
    insert               = require('gulp-insert');

// COMPONENT=<new_component_name> gulp create
var component_name = 'c-FP-journey';
gulp.task('create', function(){
    var components_dest = 'dev/templates/_includes/components/' + component_name + '/';
    var scss_str = '.' + component_name + ' {}';
    var jade_str = 'mixin ' + component_name + '(data)\n\t.' + component_name;

    fs.stat(components_dest + component_name + '.jade', function(err, stat) {
        if(err == null) {
            console.error('ERROR: ' + component_name + '.jade' + ' in already exist');
        } else {
            fs.stat(components_dest + component_name + '.scss', function(err, stat) {
                if(err == null) {
                    console.error('ERROR: ' + component_name + '.scss' + ' in already exist');
                } else {
                    file(component_name + '.scss', scss_str)
                        .pipe(gulp.dest(components_dest));
                    file(component_name + '.jade', jade_str)
                        .pipe(gulp.dest(components_dest));
                    gulp.src('dev/scss/_includes/components/index.scss')
                        .pipe(insert.append('\n@import "../../../templates/_includes/components/' + component_name + "/" + component_name + '";'))
                        .pipe(gulp.dest('dev/scss/_includes/components/'));
                };
            });
        };
    });
    return true;
});

// COMPONENT=<new_component_name> gulp create:jade
gulp.task('create:jade', function(){
    var components_dest = 'dev/templates/_includes/components/' + component_name + '/';
    var jade_str = 'mixin ' + component_name + '(data)\n\t.' + component_name;

    fs.stat(components_dest + component_name + '.jade', function(err, stat) {
        if(err == null) {
            console.error('ERROR: ' + component_name + '.jade' + ' in already exist');
        } else {
            file(component_name + '.jade', jade_str)
                .pipe(gulp.dest(components_dest));
        };
    });
    return true;
});

// COMPONENT=<new_component_name> gulp create:scss
gulp.task('create:scss', function(){
    var components_dest = 'dev/templates/_includes/components/' + component_name + '/';
    var scss_str = '.' + component_name + '{}';
    fs.stat(components_dest + component_name + '.scss', function(err, stat) {
        if(err == null) {
            console.error('ERROR: ' + component_name + '.scss' + ' in already exist');
        } else {
            file(component_name + '.scss', scss_str)
                .pipe(gulp.dest(components_dest));
            gulp.src('dev/scss/_includes/components/index.scss')
                .pipe(insert.append('\n@import "../../../templates/_includes/components/' + component_name + "/" + component_name + '";'))
                .pipe(gulp.dest('dev/scss/_includes/components/'));
        };
    });
    return true;
});