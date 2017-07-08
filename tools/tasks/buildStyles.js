const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');

const OPTIONS = require('../paths');

module.exports = function buildStyles() {
    return gulp.src(OPTIONS.FILE.LESS_ENTRY)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(OPTIONS.DIR.BUILD_STYLES));
};
