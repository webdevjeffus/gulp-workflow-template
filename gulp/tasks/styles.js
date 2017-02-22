var gulp =          require("gulp");
var postcss =       require("gulp-postcss");
var cssImport =     require("postcss-import");
var mixins =        require("postcss-mixins");
var cssVars =       require("postcss-simple-vars");
var nested =        require("postcss-nested");
var autoprefixer =  require("autoprefixer");


gulp.task("buildCSS", function() {
  return gulp.src( "./app/assets/css/styles.css" )
    .pipe( postcss([cssImport, mixins, cssVars, nested, autoprefixer]))
    .on("error", function(error) {
      console.log(error.toString());
      this.emit("end");
    })
    .pipe(gulp.dest( "./app/temp/css" ));
});



