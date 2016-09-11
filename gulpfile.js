var gulp = require("gulp");
var eslint = require('gulp-eslint');
var jade = require('gulp-jade');
var ghPages = require('gulp-gh-pages');


gulp.task('copy', function () {
    gulp.src("./src/**/*.*")
        .pipe(gulp.dest('./dist/'));

});


gulp.task('eslint', function () {
    return gulp.src(['src/**/*.js',])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('jade', function () {
    var YOUR_LOCALS = {};

    gulp.src('./src/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'))
});


gulp.task('deploy:gh-pages', function () {
    return gulp.src("./src/**/*.*")
        .pipe(ghPages({
            message: '(deploy) ' + (new Date().toISOString())
        }));
});
