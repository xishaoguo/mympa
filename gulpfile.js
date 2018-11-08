const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');


//开发环境的gulp
gulp.task("builddev", () => {
    return watch('src/nodeuii/**/*.js', {
        ignoreInitial: false
    }, () => {
        return gulp.src('src/nodeuii/**/*.js')
            .pipe(babel({
                babelrc: false,
                "plugins": ["transform-es2015-modules-commonjs"]
            })).pipe(gulp.dest('dist'))
    })
});
//上线环境的Gulp
gulp.task("buildprod", () => {
    return gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            ignore: ['./src/nodeuii/config/index.js'],
            "plugins": ["transform-es2015-modules-commonjs"]
        }))
        .pipe(gulp.dest('./dist'));
});
//上线环境的Gulp
gulp.task("buildconfig", () => {
    return gulp.src('./src/nodeuii/**/*.js')
        .pipe(rollup({
            format:"cjs",
            input:'./src/nodeuii/config/index.js',
            plugins: [
                replace({
                  "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));
});

let _task = ["builddev"];
if (process.env.NODE_ENV == "production") {
    _task = gulpSequence("buildprod", "buildconfig");
}
gulp.task("default", _task);