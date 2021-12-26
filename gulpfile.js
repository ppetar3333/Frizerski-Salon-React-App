const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
const prefix = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');

// Iconfont Task
const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

gulp.task('iconfont', ()=> {
	return gulp.src('src/pre-assets/icons/*.svg')
		.pipe(iconfont({
			fontName: 'iconfont',
			formats: ['woff', 'woff2'],
			appendCodepoints: true,
			appendUnicode: false,
			normalize: true,
			fontHeight: 1000,
			centerHorizontally: true
		}))
		.on('glyphs', function (glyphs, options) {
			gulp.src('src/iconfont-template/iconfont.scss')
				.pipe(consolidate('underscore', {
					glyphs: glyphs,
					fontName: options.fontName,
					fontDate: new Date().getTime()
				}))
				.pipe(gulp.dest('src/scss/icon-font'));
		})
		.pipe(gulp.dest('src/assets/fonts'));
});

// Stylelint Task
function lintCssTask() {
  return src('src/scss/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

// Sass Task
function scssTask(){
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('src/dist'));
}

// Browser Reload
function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['src/scss/**/*.scss'], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  lintCssTask,
  watchTask
);