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
});