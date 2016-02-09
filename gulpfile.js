/* Gulp Tasks */
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		scss = require('gulp-scss'),
		concat = require('gulp-concat');

// Default Gulp task
gulp.task('default', function(){
	console.log('Gulp, reporting in, ready for service!');
});


// ========================================
// CSS Build Tasks
// ========================================

// Compile SCSS files
gulp.task("build-dev-css", function () {
  gulp.src("./assets/scss/**/*.scss")
			.pipe(scss({"bundleExec": true}))
			.pipe(concat('custom.css'))
			.pipe(gulp.dest("./assets/css/"));
});

gulp.task("build-prod-css", function () {
  gulp.src("./assets/scss/**/*.scss")
			.pipe(scss({"bundleExec": true}))
			.pipe(concat('custom.css'))
			.pipe(uglify())
			.pipe(gulp.dest("./assets/css/"));
});


// ========================================
// JS Build Tasks
// ========================================

// Build Function for Development
gulp.task('build-dev-js', function() {
	console.log('Building Assets for Development...');
	return gulp
		.src('./assets/js/modules/*.js')
		.pipe(concat('custom.js'))
		.pipe(gulp.dest('./assets/js/'));
});

// Build Function for Production
gulp.task('build-prod-js', function() {
	console.log('Building Assets for Production...');
	return gulp
		.src('./assets/js/modules/*.js')
		.pipe(concat('custom.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'));
});

// ========================================
// Dev Tasks
// ========================================

// Run Unit Tests
gulp.task('unit-test', function() {
	console.log('Running Unit Tests...');
	// Test
	console.log('Tests complete.');
});

// Watch SCSS files to compile on save.
gulp.task('watch', function() {
	console.log("I'm watching you...");
	console.log(process.argv[2]);
	var environment = process.argv[2];

	if(environment === '-dev') {
		gulp.watch('./assets/css/scss/**/*.scss', ['build-dev-css']);
		gulp.watch('./assets/js/**/*.js', ['unit-test', 'build-dev-js']);
	}else
	if( environment === '-prod') {
		gulp.watch('./assets/css/scss/**/*.scss', ['build-prod-css']);
		gulp.watch('./assets/js/**/*.js', ['unit-test', 'build-prod-js']);
	}
});
