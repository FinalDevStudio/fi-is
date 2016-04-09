'use strict';

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var del = require('del');

gulp.task('cleanup', function () {
  del.sync('fi-is.min.js');
});

gulp.task('default', ['cleanup'], function () {
  return gulp.src('fi-is.js').

  pipe(uglify()).

  pipe(rename({
    extname: '.min.js'
  })).

  pipe(gulp.dest('.'));
});
