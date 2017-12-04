var gulp = require('gulp');  
var runSequence = require('run-sequence');

gulp.task('dist', function (callback) {  
  runSequence(
    'delete',
    'copy',
    'copy:fonts',
    [
      'wiredep',
      'wiredep:scss'
    ],
    'sass',
    'useref',
    [
      'optimize:css',
      'optimize:js',
      'optimize:images'
    ],
    'rev',
    'rev:collect',
    'webp',
    'cdnize',
    callback
  );
});