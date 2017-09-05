import gulp from "gulp"
import sass from "gulp-sass"
import concat from "gulp-concat"
import autoprefixer from "gulp-autoprefixer"
// import postcss from "gulp-postcss"
// import cssnext from "postcss-cssnext"

// const processors = [
//     cssnext({browsers: ['last 2 version']})
// ];

gulp.task("default", ()=>{
    return gulp.src("./html/template/default/sass/*.sass")  // .scss/.sass ファイルを取得
        .pipe(sass({
            // outputStyle: "expanded" // コンパイルする際の CSS の書式を指定できる
            outputStyle: "compressed" // コンパイルする際の CSS の書式を指定できる
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(postcss(processors))
        .pipe(concat("mystyle-bundle.css"))
        .pipe(gulp.dest("./html/template/default/css/"));  // cssフォルダー以下に保存
});
