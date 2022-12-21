// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    filter = require('gulp-filter'),
    plugin = require('gulp-load-plugins')();

// Set path to Foundation files
const SLICK = 'node_modules/slick-carousel/slick'

// Select Foundation components, remove components project will not use
const SOURCE = {
	vendorScripts: [
		'assets/scripts/vendor/**/*.js',
		SLICK + '/slick.js',
    ],

	// Place custom JS here, files will be concantonated, minified if ran with --production
	scripts: 'assets/scripts/js/**/*.js',

	// Scss files will be concantonated, minified if ran with --production
	styles: 'assets/styles/scss/**/*.scss'
};

const ASSETS = {
	styles: 'assets/styles/',
	scripts: 'assets/scripts/',
	all: 'assets/'
};

const JSHINT_CONFIG = {
	"node": true,
	"globals": {
		"document": true,
		"jQuery": true
	}
};

// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript Vendor
gulp.task('vendor-scripts', function() {

	// Use a custom filter so we only lint custom JS
	const CUSTOMFILTER = filter(ASSETS.scripts + 'js/vendor/**/*.js', {restore: true});

	return gulp.src(SOURCE.vendorScripts)
		.pipe(plugin.plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel({
			presets: ['es2015'],
			compact: true,
			ignore: ['what-input.js', 'intlTelInput.js']
		}))
		.pipe(CUSTOMFILTER)
			.pipe(plugin.jshint(JSHINT_CONFIG))
			.pipe(plugin.jshint.reporter('jshint-stylish'))
			.pipe(CUSTOMFILTER.restore)
		.pipe(plugin.concat('vendor.js'))
		.pipe(plugin.uglify())
		.pipe(gulp.dest(ASSETS.scripts))
});

// JSHint, concat, and minify JavaScript Vendor
gulp.task('scripts', function() {
	return gulp.src([SOURCE.scripts, '!assets/scripts/js/**/*.min.js'])
		.pipe(plugin.plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel({
			presets: ['es2015'],
			compact: true,
			ignore: ['wow.min.js']
		}))
		/* .pipe(plugin.jshint(JSHINT_CONFIG))
		.pipe(plugin.jshint.reporter('jshint-stylish')) */
		.pipe(plugin.concat('app.js'))
		.pipe(plugin.uglify())
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.scripts))
});

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
	return gulp.src(SOURCE.styles)
		.pipe(plugin.plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass())
		.pipe(plugin.autoprefixer({
		    browsers: [
		    	'last 2 versions',
		    	'ie >= 9',
				'ios >= 7'
		    ],
			cascade: false,
			grid: true,
      		flexbox: true,
		}))
		.pipe(plugin.cssnano())
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.styles))
		.pipe(browserSync.reload({
          stream: true
        }));
});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch(SOURCE.styles, gulp.parallel('styles'));

	// Watch vendor scripts files
	//gulp.watch(SOURCE.vendorScripts, gulp.parallel('vendor-scripts'));

	// Watch scripts files
	gulp.watch(SOURCE.scripts, gulp.parallel('scripts'));

});

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts'));