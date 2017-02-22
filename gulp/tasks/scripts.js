var gulp = require("gulp");
var webpack = require("webpack");

gulp.task("buildJS", function(callback) {
  webpack(require("../../webpack.config.js"), function(error, stats) {
    if (error) {
      console.log(error.toString());
    }
    console.log(stats.toString());
    callback();
  });
});