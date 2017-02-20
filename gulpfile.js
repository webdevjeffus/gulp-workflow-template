var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssVars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var browserSync = require("browser-sync").create();

gulp.task("default", function() {
  console.log("You ran default gulp task.");
});

gulp.task("html", function() {
  browserSync.reload();
});

gulp.task("buildCSS", function() {
  return gulp.src( "./app/assets/css/styles.css" )
    .pipe( postcss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest( "./app/temp/css" ));
});

gulp.task("watch", function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/css/**/*.css", function() {
    gulp.start("updateCSS");
  });
});

gulp.task("updateCSS", ["buildCSS"],function() {
  return gulp.src("./app/temp/css/styles.css")
    .pipe(browserSync.stream());
});