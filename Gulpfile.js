const gulp = require('gulp');
const OPTIONS = require('./tools/paths');

function buildScripts() {
    const babelify = require('babelify');
    const browserify = require('browserify');
    const sourcemaps = require('gulp-sourcemaps');
    const rename = require('gulp-rename');
    const source = require('vinyl-source-stream');
    const buffer = require('vinyl-buffer');

    return browserify({
            entries: OPTIONS.FILE.JS_ENTRY,
            extensions: ['.js'],
            debug: true
        })
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-0']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true  }))
        .pipe(rename({ suffix: '.min'  }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(OPTIONS.DIR.BUILD_JS));
}

gulp.task('scripts', () => buildScripts());

gulp.task('build', ['scripts']);
gulp.task('default', ['build']);
