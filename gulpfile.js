var gulp  = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

//compile sass to css
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

//move js files
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});