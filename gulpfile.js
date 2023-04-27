const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

// Sass task

gulp.task("sass", function(done) {
  return gulp
    .src("./src/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
  done();
});

// browser-sync task

// gulp.task("browser-sync" , function () {
//   browserSync.init({
//     server:{
//       baseDir: "./"
//     },
//     // browser: "firefox developer edition"
//   })
// })


// watch task

gulp.task("watch", function() {
  browserSync.init({
    server:{
      baseDir: "./"
    },
    // browser: "firefox developer edition"
  })
  gulp.watch(["./src/sass/**/*.scss", "**/*.html"], gulp.series(["sass"])).on("change" , browserSync.reload);
})