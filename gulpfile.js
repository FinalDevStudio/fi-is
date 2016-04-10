'use strict';

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const del = require('del');

var src = './lib/index.js';

gulp.task('cleanup', () => {
  return del.sync('dist/*.js');
});

function build(min) {
  var b = browserify({
    standalone: 'is',
    entries: src,
    debug: true
  });

  return b.bundle().

  pipe(source('bundle.js')).

  pipe(buffer()).

  pipe(uglify(min ? null : {
    compress: false,
    mangle: false,
    output: {
      beautify: true
    }
  })).

  pipe(rename({
    basename: 'fi-is',
    extname: min ? '.min.js' : '.js'
  })).

  pipe(gulp.dest('dist'));
}

gulp.task('compile', () => {
  return build(false);
});

gulp.task('minify', () => {
  return build(true);
});

gulp.task('default', ['cleanup', 'compile', 'minify']);
