const gulp = require('gulp');
const buildScripts = require('./tools/tasks/buildScripts');
const OPTIONS = require('./tools/paths');



gulp.task('scripts', () => buildScripts());

gulp.task('build', ['scripts']);
gulp.task('default', ['build']);
