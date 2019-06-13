const source = require('vinyl-source-stream');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const jsdox = require('jsdox');
const gulp = require('gulp');
const del = require('del');

const opts = {
  uglify: {
    min: {
      mangle: true,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    },

    dev: {
      compress: false,
      mangle: false,
      output: {
        beautify: true
      }
    }
  }
};

/**
 * Builds the dist versions for the browser.
 *
 * @param {Boolean} min Whether the output should be minified.
 *
 * @returns {Object} The gulp stream object.
 */
function build(min) {
  const options = {
    entries: './lib/index.js',
    standalone: 'is',
    debug: true
  };

  const stream = browserify(options).bundle();

  return stream
    .pipe(source('bundle.tmp.js'))
    .pipe(buffer())
    .pipe(uglify(min ? opts.uglify.min : opts.uglify.dev).on('error', util.log))
    .pipe(
      rename({
        extname: min ? '.min.js' : '.js',
        basename: 'fi-is'
      })
    )
    .pipe(gulp.dest('dist'));
}

/** Dists */

const cleanupDist = () => del('dist/*.js');
const compileDist = () => build(false);
const minifyDist = () => build(true);

/** Documentation */

const cleanupDocs = () => del('docs/**.*');

const compileDocs = done => {
  jsdox.generateForDir('./lib', './docs', null, done);
};

const dist = gulp.series(cleanupDist, compileDist, minifyDist);
const docs = gulp.series(cleanupDocs, compileDocs);

module.exports.default = gulp.series(dist, docs);
module.exports.dist = dist;
module.exports.docs = docs;
