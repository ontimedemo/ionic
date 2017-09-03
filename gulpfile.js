var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc3');

/**
 * Default Gulp Task
 */
gulp.task('default', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

/**
 * Documentation Task
 *
 * Output: docs/gen -- Location set in jsdoc/src/jsdocConfig.json
 */
gulp.task('docs', function(callback) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
    .pipe(jsdoc(callback));
});
