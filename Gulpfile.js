const gulp = require('gulp');
const buildStyles = require('./tools/tasks/buildStyles');
const buildScripts = require('./tools/tasks/buildScripts');


gulp.task('styles', () => buildStyles());
gulp.task('scripts', () => buildScripts());

gulp.task('build', [
    'scripts',
    'styles'
]);

gulp.task('default', ['build']);
