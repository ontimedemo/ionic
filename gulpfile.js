let gulp = require('gulp'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  jsdoc = require('gulp-jsdoc3');

/**
 * Documentation Task
 *
 * Output: docs/gen -- Location set in jsdoc/src/jsdocConfig.json
 *  Can be set with custom config file
 */
gulp.task('docs', function(callback) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
    .pipe(jsdoc(callback));
});

/**
 * Default Gulp Task
 */
gulp.task('default', function() {
  let runSequence = require('run-sequence');

  runSequence('docs');
  // return gulp.src('src/**/*.js')
  //   .pipe(sourcemaps.init())
  //   .pipe(babel())
  //   .pipe(concat('all.js'))
  //   .pipe(sourcemaps.write('.'))
  //   .pipe(gulp.dest('dist'));
});
