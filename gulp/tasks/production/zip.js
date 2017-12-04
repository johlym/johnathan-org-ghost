var gulp = require('gulp');
var zip = require('gulp-zip');
var size = require('gulp-size');

gulp.task('zip', function () {
  return gulp
    .src('dist/**/*')
    .pipe(zip('johnathan-org-theme.zip'))
    .pipe(gulp.dest('dist'))
    .pipe(size());
});