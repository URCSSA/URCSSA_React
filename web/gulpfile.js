'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename');
var changed = require('gulp-changed');


//- SCSS/CSS
var SCSS_SRC = './src/Assets/scss/**/*.scss'; //input path
var SCSS_DEST = './src/Assets/css'; //output path

//Compile SCSS

gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
});

//detect changes in SCSS
gulp.task('watch_scss', function(){
    return gulp.watch(SCSS_SRC, gulpl.series('compile_scss'));
});

// gulp.task('watch_scss', gulp.series('compile_scss', function(){
//    gulp.watch(SCSS_SRC, ['compile_scss']);
// }));

//Run tasks
gulp.task('default', gulp.series('watch_scss'));

//todo: run gulp err: The following tasks did not complete: default, watch_scss, compile_scss
// Did you forget to signal async completion? --> but running is successful but not auto run
