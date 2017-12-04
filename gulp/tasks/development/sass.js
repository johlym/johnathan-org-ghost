var gulp = require('gulp');  
var sass = require('gulp-sass');  
var sourcemaps = require('gulp-sourcemaps');  
var neat = require("bourbon-neat").includePaths;

gulp.task('sass', function () {  
  return gulp
    .src('app/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['sass'].concat(neat)
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('app/assets/css'));
});