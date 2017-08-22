var gulp   = require('gulp');
var sass   = require('gulp-sass');
var clean  = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch  = require('gulp-watch');

gulp.task('default', ['watch', 'css']);

gulp.task('watch', function() {
	gulp.watch('assets/_sass/**/*.scss', ['css']);
	//gulp.watch('assets/_scripts/*.js', ['js']);
});

gulp.task('css', function() {
	return gulp.src('assets/_sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
	return gulp.src([
    'assets/_scripts/vendor/jquery-2.2.4.min.js',
    'assets/_scripts/custom/base.js'
	])
	    .pipe(concat('scripts.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('assets/js'));
});
