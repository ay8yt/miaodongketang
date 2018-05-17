
requirejs.config({
	// baseUrl: "https://www.miaodongketang.cn/",
	baseUrl: "http://localhost:8080",
	paths: {
		"jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
		"swiper": "https://cdn.bootcss.com/Swiper/4.0.3/js/swiper.min",
		"waves": "scripts/lib/waves",
		"iscroll": "https://cdn.bootcss.com/iScroll/5.2.0/iscroll-probe.min",
		"template": "scripts/lib/template",
		"utils": "utils/commonUtil",
		"datas": "utils/data",
		"loadVideolist": "scripts/videolist",
		"router" : "utils/router"
	},
    map: {
        '*': {
            'css': 'https://www.miaodongketang.cn/scripts/lib/css.js'
        }
    },
	shim: {
		waves: {
			deps: ['css!https://www.miaodongketang.cn/styles/lib/waves.css']
		},
		swiper: {
			deps: ['css!https://cdn.bootcss.com/Swiper/4.0.3/css/swiper.min.css']
		}
	}
});

