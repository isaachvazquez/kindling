// Gulp Plugins
// ============
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		babel = require('gulp-babel'),
		concat = require('gulp-concat'),
		scss = require('gulp-sass'),
		cssnano = require('gulp-cssnano'),
		browserSync = require('browser-sync').create(),
		php = require('gulp-connect-php');
		// tape = require('gulp-tape'),
		// tapColorize = require('tap-colorize');


// Asset Paths
// ===========
var vendorSCSSPath = './dev-assets/scss/vendor/*.scss',
		styleguideSCSSPath = './dev-assets/scss/styleguide.scss',
		baseSCSSPath = './dev-assets/scss/app.scss',
		scssWatchPath = ['./dev-assets/scss/**/*.scss', styleguideSCSSPath, vendorSCSSPath],
		compiledCSSPath = './assets/css/',

		jsPath = './dev-assets/js/modules/app.js',
		jsWatchPath = './dev-assets/js/**/*.js',
		compiledJSPath = './assets/js/';


// Default Gulp Task
// =================
gulp.task('default', function() {
	console.log('Gulp, reporting in, ready for service!');
});


// ======================================================================
// Development Gulp Tasks
// ======================================================================
// Browsersync Docs: https://browsersync.io/docs/gulp

// Basic Serve task
// yarn run gulp serve
gulp.task('serve', ['browser-sync'], function() {});

// BrowserSync Task
gulp.task('browser-sync',['php', 'scss', 'build-styleguide-css', 'build-vendor-css', 'build-dev-js'], function() {
		// Initiate Browsersync
    browserSync.init({
      proxy: 'localhost:7771',
      port: 7777,
    });

    // Watch SCSS changes
    gulp.watch(scssWatchPath, ['scss', 'build-styleguide-css', 'build-vendor-css']);

    // Watch JS changes
    gulp.watch(jsWatchPath, ['build-dev-js']).on('change', browserSync.reload);

    // Watch HTML changes
    gulp.watch(['./*.*', './styleguide/*.*']).on('change', browserSync.reload);
});

// Serve up via php Server
gulp.task('php', function() {
    php.server({
    	base: './',
    	port: 7771,
    	keepalive: true
    });
});

// Build CSS assets for development & auto-inject into browsers
gulp.task('scss', function() {
  gulp.src(baseSCSSPath)
	  	.pipe(concat('custom.css'))
	    .pipe(scss().on('error', scss.logError))
	    .pipe(gulp.dest(compiledCSSPath))
	    .pipe(browserSync.stream());
});

// Build JS assets for development
gulp.task('build-dev-js', function() {
	gulp.src(jsPath)
			.pipe(concat('custom.js'))
			.pipe(gulp.dest(compiledJSPath));
});

// Build Styleguide CSS Assets
gulp.task("build-styleguide-css", function () {
  gulp.src(styleguideSCSSPath)
			.pipe(concat('styleguide.css'))
			.pipe(scss().on('error', scss.logError))
			.pipe(gulp.dest(compiledCSSPath))
			.pipe(browserSync.stream());
});

// Build Vendor CSS Assets
gulp.task("build-vendor-css", function () {
  gulp.src(vendorSCSSPath)
			.pipe(concat('vendor.css'))
			.pipe(scss().on('error', scss.logError))
			.pipe(gulp.dest(compiledCSSPath))
			.pipe(browserSync.stream());
});


// ======================================================================
// Production Gulp Tasks
// ======================================================================

// Production Build
// yarn run gulp build
gulp.task('build', ['build-prod-js', 'build-prod-css']);

// CSS
// yarn run gulp build-prod-css
gulp.task("build-prod-css", function () {
	gulp.src(baseSCSSPath)
			.pipe(concat('custom.css'))
			.pipe(scss().on('error', scss.logError))
			.pipe(cssnano())
			.pipe(gulp.dest(compiledCSSPath));
});

// JS
// yarn run gulp build-prod-js
gulp.task('build-prod-js', function() {
	return gulp.src(jsPath)
		.pipe(concat('custom.js'))
		.pipe(babel({
        presets: ['env']
    }))
		.pipe(uglify().on('error', function(e) {
			console.log(e);
		}))
		.pipe(gulp.dest(compiledJSPath));
});


// // ========================================
// // Unit Tests
// // Tape Reference: https://github.com/substack/tape
// // ========================================
// // Run Unit Tests
// gulp.task('test', function() {
// 	console.log("Running Unit Tests...");
//   return gulp.src('tests/*.js')
//     .pipe(tape({ reporter: tapColorize() }));
// });
