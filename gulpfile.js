var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('build-js', function() {
  browserify('./src/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('build-scss', function() {
  gulp.src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/**/*.js', ['build-js']);
  gulp.watch('./src/**/*.scss', ['build-scss']);
});

gulp.task('build', ['build-js', 'build-scss']);

gulp.task('default', ['build']);