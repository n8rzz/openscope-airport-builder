const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const OPTIONS = require('../paths');

module.exports = function buildScripts() {
    const browserifyOptions = {
        entries: OPTIONS.FILE.JS_CLIENT_ENTRY,
        extensions: ['.js'],
        debug: true
    };

    return browserify(browserifyOptions)
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-0']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(OPTIONS.DIR.BUILD_JS));
};
