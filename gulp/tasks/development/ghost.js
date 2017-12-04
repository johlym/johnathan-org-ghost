// /gulp/tasks/ghost.js
var gulp = require('gulp');  
var ghost = require('ghost');  
var path = require('path');  
var runSequence = require('run-sequence');
var notify = require('gulp-notify');
var g;

gulp.task('ghost:start', function (callback) {  
  notify({ message: 'Running Ghost in development mode.'});
  runSequence(
    [
      'wiredep',
      'wiredep:scss'
    ],
    'sass',
    function () {
      g = ghost({
        config: path.join(__dirname, '../ghost-dev-config.js')
      });

      g.then(function (ghostServer) {
        ghostServer.start().then(function () {
          runSequence('browsersync');
        });
      });

      callback();
    }
  );
});