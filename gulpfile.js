"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var scss = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify-es").default;
var pipeline = require("readable-stream").pipeline;
var svgstore = require("gulp-svgstore");
var fileinclude = require('gulp-file-include');

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'source/view-parts'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(scss({allowEmpty: true}))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/scss/**/*.scss", gulp.series("css", "refresh"));
  gulp.watch("source/scss/*.scss", gulp.series("css", "refresh"));
  gulp.watch("source/**/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("images", function () {
  return gulp.src("source/**/*.{png,jpg,jpeg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/polyfils/*.js",
    "source/favicon*"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("js", function () {
  return pipeline(
    gulp.src("source/js/*.js"),
    sourcemap.init(),
    uglify(),
    rename({suffix: ".min"}),
    sourcemap.write("."),
    gulp.dest("build/js")
  );
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icn/icn_*.svg")
    .pipe(imagemin([imagemin.svgo()]))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("css-nomin", function () {
  return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(scss())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"));
});

gulp.task("rename", function () {
  return gulp.src("source/img/icn/*")
    .pipe(rename(function(path) {
      var name = path.basename;
      path.basename = "icn_" + name.split(" ").join("");
    }))
    .pipe(gulp.dest("source/img/icn"));
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "webp",
  "html",
  "css",
  "js",
  "sprite",
  "css-nomin"
));

gulp.task("start", gulp.series("build", "server"));
