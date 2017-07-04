// Include Gulp
var gulp = require('gulp');
// Include Gulp Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

//Concatenate & Minify JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//sass turns SCSS into built CSS
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

//Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass']);
 });



//Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);
