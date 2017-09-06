var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var jsdoc = require("gulp-jsdoc3");
var tslint = require("gulp-tslint");

/**
 * Documentation Task
 *
 * Output: docs/gen -- Location set in jsdoc/src/jsdocConfig.json
 *  Can be set with custom config file
 */
gulp.task('docs', function(callback) {
  gulp.src(['README.md', './src/**/*.ts'], {read: false})
    .pipe(jsdoc(callback));
});

/**
 * Tslint Task
 */
gulp.task('tslint', () => {
  gulp.src('./src/**/*.ts')
    .pipe(tslint({
      formatter: "stylish"
    }))
    .pipe(tslint.report())
});

/**
 * Default Gulp Task
 */
gulp.task('default', function() {
  let runSequence = require('run-sequence');

  runSequence('docs', 'tslint');
  // return gulp.src('src/**/*.js')
  //   .pipe(sourcemaps.init())
  //   .pipe(babel())
  //   .pipe(concat('all.js'))
  //   .pipe(sourcemaps.write('.'))
  //   .pipe(gulp.dest('dist'));
});
