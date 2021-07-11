let browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')(require('sass')),
    cssMin = require('gulp-cssmin'),
    concat = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    gulp = require('gulp');

let extension = 'scss';

gulp.task('sass', function (done) {
    gulp.src('source/sass/**/*.' + extension)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('source/css'))
        .pipe(browserSync.stream());
    done();



});
gulp.task('server',function () {
    browserSync.init({
        server: 'source/'

    });
    gulp.watch('source/sass/**/*.'+ extension).on('change',gulp.series('sass'));
    gulp.watch('source/*.html').on('change', browserSync.reload);
    gulp.watch('source/js/**/*.js').on('change', browserSync.reload);


});
gulp.task('default', gulp.series('sass', 'server'));