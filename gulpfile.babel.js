import gulp from "gulp"
import sass from "gulp-sass"
import concat from "gulp-concat"
import autoprefixer from "gulp-autoprefixer"

const source_dir = "./ec/html/template/default/sass/*.sass"
const output_dir = "./ec/html/template/default/css/"
const bundle_css_name = "mystyle-bundle.css"

gulp.task("css", ()=>{
    return gulp.src(source_dir)  // .scss/.sass ファイルを取得
        .pipe(sass({
            outputStyle: "expanded" // コンパイルする際の CSS の書式を指定できる
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat(bundle_css_name))
        .pipe(gulp.dest(output_dir));  // cssフォルダー以下に保存
})

gulp.task("css-min", ()=>{
    return gulp.src(source_dir)  // .scss/.sass ファイルを取得
        .pipe(sass({
            outputStyle: "compressed" // コンパイルする際の CSS の書式を指定できる
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat(bundle_css_name))
        .pipe(gulp.dest(output_dir));  // cssフォルダー以下に保存
})

gulp.task("watch", ["css"], ()=>{
    gulp.watch(source_dir, ["css"])
})

gulp.task("default", ["css"])
