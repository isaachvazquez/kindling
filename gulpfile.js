// =====================================================================
// Gulp Tasks
// Install Gulp plugins:
// npm install --save-dev gulp-uglify gulp-sass gulp-concat gulp-cssnano
// =====================================================================
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		scss = require('gulp-sass'),
		cssnano = require('gulp-cssnano');

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
  gulp.src("./assets/scss/**/*.scss")
			.pipe(scss().on('error', scss.logError))
			.pipe(concat('custom.css'))
			.pipe(gulp.dest("./assets/css/"));
});

// Build CSS Assets for Production
gulp.task("build-prod-css", function () {
	gulp.src("./assets/scss/**/*.scss")
			.pipe(scss().on('error', scss.logError))
			.pipe(concat('custom.css'))
			.pipe(cssnano())
			.pipe(gulp.dest("./assets/css/"));
});

// ========================================
// JS Build Tasks
// ========================================
// Build JS Assets for Development
gulp.task('build-dev-js', function() {
	console.log('Building Assets for Development...');
	return gulp
		.src('./assets/js/modules/*.js')
		.pipe(concat('custom.js'))
		.pipe(gulp.dest('./assets/js/'));
});

// Build JS Assets for Production
gulp.task('build-prod-js', function() {
	return gulp
		.src('./assets/js/modules/*.js')
		.pipe(concat('custom.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

// ========================================
// Unit Tests
// ========================================
// Run Unit Tests
gulp.task('unit-test', function() {
	console.log('Running Unit Tests...');
	// Test
	console.log('Tests complete.');
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
	gulp.watch('./assets/scss/**/*.scss', ['build-dev-css']);
	gulp.watch('./assets/js/**/*.js', ['unit-test', 'build-dev-js']);
});
