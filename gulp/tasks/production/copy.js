var gulp = require('gulp');

gulp.task('copy', function () {
  return gulp
    .src(['app/package.json',
      'app/*.txt',
      'app/browserconfig.xml',
      'app/assets/css/**/*',
      'app/assets/js/*',
      'app/assets/svg/*'], 
      {base: './app'})
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:fonts', function () {
  return gulp
    .src('app/assets/fonts/**', {base: 'app/assets/fonts'})
    .pipe(gulp.dest('dist/assets/fonts'));
});