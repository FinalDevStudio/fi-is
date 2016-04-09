'use strict';

const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const del = require('del');

var source = 'lib/fi-is.js';

gulp.task('cleanup', () => {
  return del.sync('dist/*.js');
});

gulp.task('compile', () => {
  return gulp.src(source).

  pipe(uglify({
    compress: false,
    mangle: false,
    output: {
      beautify: true
    }
  })).

  pipe(rename({
    extname: '.js'
  })).

  pipe(gulp.dest('dist'));
});

gulp.task('minify', () => {
  return gulp.src(source).

  pipe(uglify()).

  pipe(rename({
    extname: '.min.js'
  })).

  pipe(gulp.dest('dist'));
});

gulp.task('default', ['cleanup', 'compile', 'minify']);
