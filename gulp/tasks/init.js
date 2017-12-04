// /gulp/tasks/init.js
var gulp = require('gulp');  
var replace = require('gulp-replace');
var shell = require('gulp-shell');

gulp.task('init', ['symlink','knex-migrator'], function () {
    return gulp
    .src('node_modules/ghost/core/server/data/default-settings.json', {base : './'})
    .pipe(replace(/casper/g, 'johnathan-org-theme'))
    .pipe(gulp.dest('./'));
});