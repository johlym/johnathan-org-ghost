// /gulp/tasks/browsersync.js
var gulp = require('gulp');  
var browserSync = require('browser-sync').create();

gulp.task('browsersync', function (callback) {  
  browserSync.init({
    proxy: 'localhost:2368',
    files: ['app/**/*.hbs', 'app/assets/scss/**/*.scss']
    
  });

  callback();
});

gulp.task('browsersync:reload', function (callback) {  
  browserSync.reload();

  callback();
});