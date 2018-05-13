
require(["../../conf/config"], function() {
	
	//加载CSS
	require(['css!../../styles/index/index.css']);
	require(["css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"]);
	
	require(["jquery", "swiper", "waves", "datas"], function($, Swiper, Waves, datas) {
			$(window).ready(function(){
				//水波纹特效初始化
				Waves.init();
				console.log("swiper")
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: {
					    delay: 6000,
					    disableOnInteraction: false,
				    },
				    // loop: true,
					direction: 'horizontal',
					speed: 800,
					pagination: {
						el: '.swiper-pagination',
						clickable :true
					}
				});

				//频道点击
				$(".category").click(function(e){
					setTimeout(()=>{
						window.open("views/category/category.html#cno="+$(this).attr("cno")); 
					},300);
				});

				//文章加载，单击
				var $content = $("article .content");
				$content.html(datas['feeman']);
				$("#feemanCollect").click(function(e){
					if($content.attr("display") == "yes") {
						$content.slideUp(1000);
						$content.attr("display","no");
						$(this).text("点击展开阅读");
					} else {
						$content.slideDown(1000);
						$content.attr("display","yes");
						$(this).text("点击收起原文");
					}
				})
			})
	
	})
});
