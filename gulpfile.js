var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var open = require('gulp-open');
var minify = require('gulp-minify');

// Configurations
var Config = {
    paths: {
        src: {
            html: './src/*.html',
            js: [
                './src/js/**/*.js'
            ],
            css: [
                './src/css/app.css'
            ],
            images: [
                'src/images/**/*'
            ]
        },
        dist: './dist'
    },
    localServer: {
        port: 3000,
        url: 'http://localhost:3000/'
    }
};

// Gulp task to copy HTML files to output directory
gulp.task('html', function () {
    gulp.src(Config.paths.src.html)
        .pipe(gulp.dest(Config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src(Config.paths.src.js)
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        //.pipe(concat('app.bundle.js'))
        .pipe(gulp.dest(Config.paths.dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src(Config.paths.src.images)
        .pipe(gulp.dest('dist/images'));
});

// Gulp task to concatenate our css files
gulp.task('css', function () {
    gulp.src(Config.paths.src.css)
        .pipe(concat('app.bundle.css'))
        .pipe(gulp.dest(Config.paths.dist + '/css'))
        .pipe(connect.reload());
});

// Gulp task to create a web server
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: Config.localServer.port,
        livereload: true
    });
});

// To open in web browser
gulp.task('open', function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: Config.localServer.url }));
});

// To watch folder for file changes
gulp.task('watch', function () {
    gulp.watch(Config.paths.src.html, ['html']);
    gulp.watch(Config.paths.src.css, ['css']);
    gulp.watch(Config.paths.src.js, ['js']);
});

// Gulp default task
gulp.task('default', ['html', 'images', 'css', 'js', 'connect', 'open', 'watch']);