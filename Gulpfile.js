const gulp = require('gulp');
const buildStyles = require('./tools/tasks/buildStyles');
const buildScripts = require('./tools/tasks/buildScripts');

const OPTIONS = require('./tools/paths');


gulp.task('styles', () => buildStyles());
gulp.task('scripts', () => buildScripts());

gulp.task('build', [
    'scripts',
    'styles'
]);

gulp.task('watch', () => {
    return gulp.watch(OPTIONS.GLOB.SRC, ['build']);
});

gulp.task('default', ['build']);
