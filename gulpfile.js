var gulp = require("gulp");
var eslint = require('gulp-eslint');
var jade = require('gulp-jade');
var ghPages = require('gulp-gh-pages');
var del = require('del');


gulp.task('clean', function () {
    del(['./dist/**']).then(function (paths) {
        return console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});


gulp.task('copy', function () {
    gulp.src(["./src/**/*.*", "!./src/**/*.pug"])
        .pipe(gulp.dest('./dist/'));

});


gulp.task('eslint', function () {
    return gulp.src(['src/**/*.js',])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('jade', function () {


    gulp.src('./src/*.pug')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
});


gulp.task('deploy:gh-pages', function () {
    return gulp.src("./src/**/*.*")
        .pipe(ghPages({
            message: '(deploy) ' + (new Date().toISOString())
        }));
});

gulp.task("run",['clean',"eslint","copy","jade"]);