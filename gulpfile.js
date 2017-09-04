// Kolibri Gulp File

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');


gulp.task('sass' , function() {
    gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
}); // Sass

gulp.task('watch' , function() {
    gulp.watch('./src/scss/*.scss' , ['sass']);
}); // Watch

gulp.task('default' , ['sass' , 'watch']);
