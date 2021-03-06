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
	gulp.src('src/images/**/*.{png,jpg,jpeg,gif,ico,svg}', {
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
	
	//复制static文件夹
	return gulp.src('blog/static/**/*.*').pipe(gulp.dest('./static/'));

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
		.on('error', (error)=>{
			// If you want details of the error in the console
		  	console.error(error.toString())
		})
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












	// var gulp = require("gulp"); //加载gulp模块
	// var uglify = require("gulp-uglify"); //加载压缩JS模块

	// //定义一个任务，名字叫minifyJS
	// gulp.task("minifyJS", function(){
		
	// 	gulp.src("./src/**/*.js") //读取src目录下，以及所有子目录的js文件
	// 		.pipe(uglify())  //通过pipe管道操作，传输给压缩模块处理
	// 		.pipe(gulp.dest("./dist"))  //通过pipe管道操作，传输到dist目录

	// })

