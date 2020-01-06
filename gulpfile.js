const gulp = require('gulp');
const sass = require('gulp-sass');

const sassSrc = './sass/**/*.scss' ;

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(sassSrc,gulp.parallel("saas"));
});