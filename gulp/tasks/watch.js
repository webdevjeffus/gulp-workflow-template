var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");


gulp.task("watch", function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/css/**/*.css", function() {
    gulp.start("updateCSS");
  });

  watch("./app/assets/js/**/*.js", function () {
    gulp.start("updateJS");
  });
});

gulp.task("updateCSS", ["buildCSS"], function() {
  return gulp.src("./app/temp/css/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("updateJS", ["buildJS"], function() {
  browserSync.reload();
});