var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssVars = require("postcss-simple-vars");
var nested = require("postcss-nested");

gulp.task("default", function() {
  console.log("You ran default gulp task.");
});

gulp.task("html", function() {

});

gulp.task("styles", function() {
  return gulp.src( "./app/assets/css/styles.css" )
    .pipe( postcss([cssVars, nested, autoprefixer]))
    .pipe(gulp.dest( "./app/temp/css" ));
});

gulp.task("watch", function() {

  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/css/**/*.css", function() {
    gulp.start("styles")
  })
})