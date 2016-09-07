var gulp = require("gulp");
var eslint = require('gulp-eslint');
var jade = require('gulp-jade');


gulp.task('copy',function () {
   gulp.src("./src/lection.html")
       .pipe(gulp.dest('./dist/'))

});


gulp.task('eslint', function () {
    return gulp.src(['src/**/*.js', ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});




gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('./src/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'))
});

