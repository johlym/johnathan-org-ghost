var gulp = require('gulp');
var cdnizer = require("gulp-cdnizer");

gulp.task('cdnize', function () {
  return gulp
    .src('dist/**/*.hbs')
    .pipe(cdnizer([
      {
        file: '/bower_components/highlightjs/highlight.pack.js',
        package: 'highlightjs',
        cdn: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/highlight.min.js'
      }, {
        file: '/bower_components/highlightjs/styles/default.css',
        package: 'highlightjs',
        cdn: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/styles/default.min.css'
      }, {
        file: '/bower_components/moment/moment.js',
        package: 'moment',
        cdn: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js'
      }
    ]))
    .pipe(gulp.dest('dist'));
});