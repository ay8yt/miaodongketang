const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify"); //压缩JS模块
const babel = require('gulp-babel');
const connect = require("gulp-connect");
const mincss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const pngquant = require('imagemin-pngquant');

/**
 * 打包项目
 */
gulp.task("build", function() {
	//复制，压缩CSS
	gulp.src("src/styles/**/*.css", {
		base: 'src'
	})
//	.pipe(mincss())   有bug，暂不压缩
	.pipe(gulp.dest("./"))

	//编译ES6 ， 压缩JS
	gulp.src('src/**/*.js', {
			base: 'src'
		})
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
	
	//压缩图片
	gulp.src('src/images/**/*.{png,jpg,jpeg,gif,ico}', {
		base: 'src'
	})
 	/*.pipe(cache(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    })))*/
	.pipe(gulp.dest('./'));
	
	//复制HTML
	gulp.src('src/**/*.html', {
		base: 'src'
	}).pipe(gulp.dest('./'));
	
});





gulp.task("minjs", function(){
	//编译ES6 ， 压缩JS
	gulp.src('src/**/*.js', {
		base: 'src'
	})
	.pipe(cache(babel({
		presets: ['env']
	})))
	.pipe(uglify())
	.pipe(gulp.dest('./'))
})

gulp.task("refreshHTML", function() {
	//src用来读取，pipe用来输送
	gulp.src('src/**/*.html', {
		base: 'src'
	})
	.pipe(connect.reload())
	.pipe(gulp.dest('./'));
});

gulp.task("compileSass", function() {
	//生成到src目录
	gulp.src("src/styles/**/*.scss", {
			base: 'src'
		})
		.pipe(cache(sass({
			style: "expanded"
		})))
		.on('error', swallowError)
		.pipe(gulp.dest("src"))
		.pipe(gulp.dest("./"))
})

//监听任务
gulp.task("server", function() {
	//让connect启动一个服务器，这样它才能即时刷新浏览器
	connect.server({
		root: "src",
		livereload: true
	});
	//检测文件的变化，执行相应的任务
	gulp.watch("src/**/*.js", ["minjs"]);
	gulp.watch("src/**/*.html", ["refreshHTML"]);
	gulp.watch("src/styles/**/*.scss", ["compileSass"]);
	gulp.watch("src/styles/**/*.css", ["refreshHTML"]);
});

function swallowError(error) {
    // If you want details of the error in the console
  console.error(error.toString())
  this.emit('end')
}