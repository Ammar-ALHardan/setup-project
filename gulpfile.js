const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function(done) {
  return gulp
    .src("./src/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
  done();
});


gulp.task("watch", function() {
  gulp.watch("./src/sass/**/*.scss", gulp.series(["sass"]))
})