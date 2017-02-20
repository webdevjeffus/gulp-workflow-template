var gulp =          require("gulp");
var postcss =       require("gulp-postcss");
var autoprefixer =  require("autoprefixer");
var cssVars =       require("postcss-simple-vars");
var nested =        require("postcss-nested");
var cssImport =     require("postcss-import");
var browserSync =   require("browser-sync");


gulp.task("updateCSS", ["buildCSS"], function() {
  return gulp.src("./app/temp/css/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("buildCSS", function() {
  return gulp.src( "./app/assets/css/styles.css" )
    .pipe( postcss([cssImport, cssVars, nested, autoprefixer]))
    .on("error", function(error) {
      console.log(error.toString());
      this.emit("end");
    })
    .pipe(gulp.dest( "./app/temp/css" ));
});

