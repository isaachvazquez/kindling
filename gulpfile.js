// =====================================================================
// Gulp Tasks
// Install Gulp plugins:
// npm install --save-dev gulp-uglify gulp-sass gulp-concat gulp-cssnano gulp-tape tap-colorize
// =====================================================================
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		scss = require('gulp-sass'),
		cssnano = require('gulp-cssnano'),
		tape = require('gulp-tape'),
		tapColorize = require('tap-colorize');

var scssPath = './dev-assets/scss/**/*.scss',
		jsPath = './dev-assets/js/modules/*.js',
		scssWatchPath = './dev-assets/scss/**/*.scss',
		jsWatchPath = './dev-assets/js/**/*.js',
		compiledCSSPath = './assets/css/',
		compiledJSPath = './assets/js/';

// ========================================
// Default Gulp task
// ========================================
gulp.task('default', function(){
	console.log('Gulp, reporting in, ready for service!');
});

// ========================================
// CSS Build Tasks
// ========================================
// Build CSS Assets for Development
gulp.task("build-dev-css", function () {
  gulp.src(scssPath)
			.pipe(concat('custom.css'))
			.pipe(scss().on('error', scss.logError))
			.pipe(gulp.dest(compiledCSSPath));
});

// Build CSS Assets for Production
gulp.task("build-prod-css", function () {
	gulp.src(scssPath)
			.pipe(concat('custom.css'))
			.pipe(scss().on('error', scss.logError))
			.pipe(cssnano())
			.pipe(gulp.dest(compiledCSSPath));
});

// ========================================
// JS Build Tasks
// ========================================
// Build JS Assets for Development
gulp.task('build-dev-js', function() {
	return gulp.src(jsPath)
		.pipe(concat('custom.js'))
		.pipe(gulp.dest(compiledJSPath));
});

// Build JS Assets for Production
gulp.task('build-prod-js', function() {
	return gulp.src(jsPath)
		.pipe(concat('custom.js'))
		.pipe(uglify())
		.pipe(gulp.dest(compiledJSPath));
});

// ========================================
// Unit Tests
// ========================================
// Run Unit Tests
gulp.task('test', function() {
	console.log("Running Unit Tests...");
  return gulp.src('tests/*.js')
    .pipe(tape({ reporter: tapColorize() }));
});

// ========================================
// Gulp Production Build
// ========================================
gulp.task('build', ['build-prod-js', 'build-prod-css']);

// =====================================================
// Watch SCSS & JS files to compile/concatenate on save.
// =====================================================
gulp.task('watch', function() {
	console.log("I'm watching you...");
	// console.log(process.argv[2]);
	// var environment = process.argv[2];
	gulp.watch(scssWatchPath, ['build-dev-css']);
	gulp.watch(jsWatchPath, ['build-dev-js']);
});
