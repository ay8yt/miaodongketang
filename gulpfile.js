const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify"); //压缩JS模块
const babel = require('gulp-babel');
const connect = require("gulp-connect");
const mincss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminOptipng = require('imagemin-optipng');



/**
 * 打包项目
 */
gulp.task("build", function() {
	//复制，压缩CSS
	gulp.src("src/**/*.css", {
		base: 'src'
	})
	.pipe(mincss({compatibility: 'ie8'}))
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

	//复制,压缩图片
	var jpgmin = imageminJpegRecompress({
        accurate: false,//高精度模式
        quality: "low",//图像质量:low, medium, high and veryhigh;
        method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
        min: 30,//最低质量
        loops: 0,//循环尝试次数, 默认为6;
        progressive: false,//基线优化
        subsample: "default"//子采样:default, disable;
    }),
    pngmin = imageminOptipng({
        optimizationLevel: 4
    });
	gulp.src('src/images/**/*.{png,jpg,gif,ico}', {
		base: 'src'
	})
	.pipe(imagemin({
            use: [jpgmin, pngmin]
        }))
	.pipe(gulp.dest('./'));
	
	

	
	
	
	
	
	
	//复制HTML
	gulp.src('src/**/*.html', {
		base: 'src'
	}).pipe(gulp.dest('./'));
	
	
	
	
	
});





gulp.task("refreshHTML", function() {
	//src用来读取，pipe用来输送
	gulp.src("src/*.html").pipe(connect.reload());
});

gulp.task("compileSass", function() {
	//生成到src目录
	gulp.src("src/**/*.scss", {
			base: '.'
		})
		.pipe(sass({
			style: "expanded"
		}))
		.pipe(gulp.dest(""))
})

//监听任务
gulp.task("server", function() {
	//让connect启动一个服务器，这样它才能即时刷新浏览器
	connect.server({
		root: 'src',
		livereload: true
	});
	//检测文件的变化，执行相应的任务
	gulp.watch("src/**/*.html", ["refreshHTML"]);
	gulp.watch("src/styles/**/*.scss", ["compileSass"]);
	gulp.watch("src/styles/**/*.css", ["refreshHTML"]);
});