require(["../../conf/config"], function() {
	//加载css文件
	require(["css!../../styles/category/category.css"]);
	require(["css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"]);
	
	require(
		["jquery","waves", "utils", "loadVideolist", "router", "iscroll"], 
		function($, Waves, Utils, loadVideolist, Router, IScroll) {
			$(window).ready(function(){
				console.log("dom ready");
				//获取参数
				var cno = Utils.getURLParameter("cno");
				
				//水波纹特效初始化
				Waves.init();
				
				//顶级导航按钮，初始化
				$(".navlist a.btn").eq(parseInt(cno)-1).addClass("active");
				//顶级导航按钮单击动作
				$(".navlist a.btn").click(function(e){
					$(this).addClass("active").siblings().removeClass("active");
					Router.linkto("#cno="+$(this).attr("cno"), function(){
						var cno = Utils.getURLParameter("cno");
						//根据哈希值，加载视频列表
						console.log("onhashchange---> cno:", cno)
						loadVideolist(cno, "#videosdata");
					}); 
				})
				
				//加载视频列表
				loadVideolist(cno, "#videosdata");

				//视频列表左右滑动
				var myscroll = new IScroll("#wrapper", {
					scrollX: true,
					scrollY: false
				});

				//视频列表单击动作
				$("#videosdata").on('click', "li", function(){
					var videourl =  $(this).attr("videourl");

					if(videourl == "") {
						alert("该视频正在制作当中，请晚些时候再查看");
					} else {
						$(this).addClass("active").siblings().removeClass("active");
						//生成ifame，填充视频
						var iframe = document.createElement("iframe");
						iframe.width = 1120;
						iframe.height = 630;
						iframe.class = "center-block";
						iframe.src = videourl;
						iframe.frameborder = 0;
						$(".category-detail").empty().append(iframe);

						//显示跳转优酷和赞赏按钮
						$("#gotoUKu").show().attr("href", $(this).attr("pageurl"));
						$("#dashang").show();
					}
					
				})

				$("#dashang").click(function(){
					$(".page-leftside").show().animate({left: 0}, 500, "linear");
				})
				$(".page-leftside .erweima .fold").click(function(){
					$(".page-leftside").animate({left: -300}, 500, "linear", function(){
						$(this).hide();
					});
				})
			})
		}
	)
});