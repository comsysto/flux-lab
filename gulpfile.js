var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var del = require('del');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function (callback) {
    return del(['build/**']);
    //callback();
});

gulp.task('ts', ['clean'], function () {
    var tsResult = gulp.src(['src/**/*.tsx', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(sourcemaps.write()).pipe(gulp.dest('build/typings')),
        tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('build/js'))
    ]);
});

gulp.task('js', ['ts'], function () {
    return browserify({
        entries: './build/js/index.js',
        debug: true
    })
        .bundle()
        .on('error', function (e) {
            console.log('Error: ' + e.toString());
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/compiled'))
});

gulp.task('watch', ['ts', 'js'], function () {
    gulp.watch(['src/**/*.tsx', 'src/**/*.ts'], ['ts', 'js']);
});

gulp.task('default', ['ts', 'js']);