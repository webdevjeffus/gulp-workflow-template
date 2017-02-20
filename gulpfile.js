var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("You ran default gulp task.");
});

gulp.task("html", function() {

});

gulp.task("styles", function() {

});

gulp.task("watch", function() {

  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/css/**/*.css", function() {
    gulp.start("styles")
  })
})