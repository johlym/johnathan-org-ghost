// /gulp/tasks/knex-migrator.js

var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('knex-migrator', shell.task([
  'cd node_modules/ghost && knex-migrator init'
]));