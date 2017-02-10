const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const connect = require('gulp-connect');

function compile(watch) {
    const bundler = watchify(
        browserify({
            entries: ['./src/app.js'],
            debug: true,
            extensions: [' ', 'js']
        }).transform(babel.configure({
            presets: ["es2015"]
        })));

    function rebundle() {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build'))
            .pipe(connect.reload());
    }

    if (watch) {
        bundler.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    } else {
        rebundle().pipe(exit());
    }

    rebundle();
}

function watch() {
    return compile(true);
};

gulp.task('build', function () {
    return compile();
});
gulp.task('watch', function () {
    return watch();
});
gulp.task('connect', function () {
    connect.server({
        port: 8008,
        livereload: true
    });
});


gulp.task('default', ['connect', 'watch']);

