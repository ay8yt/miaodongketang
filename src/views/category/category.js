require(['../../conf/config'], function() {
	//加载css文件
	require(['css!../../styles/category/category.css']);
	require(['css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css']);
	
	require(
		['jquery','waves', 'utils', 'loadVideolist', 'router', 'iscroll'], 
		function($, Waves, Utils, loadVideolist, Router, IScroll) {
			$(window).ready(function(){
				//获取参数
				var cno = Utils.getURLParameter('cno');
				
				//水波纹特效初始化
				Waves.init();
				
				//顶级导航按钮，初始化
				$('.navlist a.btn').eq(parseInt(cno)-1).addClass('active');
				//顶级导航按钮单击动作
				$('.navlist a.btn').click(function(e){
					$(this).addClass('active').siblings().removeClass('active');
					Router.linkto('#cno='+$(this).attr('cno'), function(){
						var cno = Utils.getURLParameter('cno');
						//根据哈希值，加载视频列表
						loadVideolist(cno, 'videolist');
					}); 
				})
				
				//加载视频列表
				loadVideolist(cno, 'videolist');



				var $videoscreen = $('.videoscreen');
				var $videoplayer = $('#videoplayer');  //即iframe
				var $gotoUKu = $('#gotoUKu');

				$videoplayer.on('load', function(){
					$('.iframe-text').remove();
				})


				//视频列表单击动作
				$('#videolist').on('click', '.videoitem img', function(){
					setTimeout(function(){
						var videourl =  $(this).attr('videourl');
						var pageurl = $(this).attr('pageurl');

						if(videourl == '') {
							alert('该视频正在制作当中，请晚些时候再查看');
						} else {
							$gotoUKu.attr('href', pageurl);

							$videoplayer.attr('src',videourl);
							$videoscreen.slideDown();

						}
					}.bind(this),200);
					
				})

				//点击关闭视频播放
				$('#closevideo').click(function(){
					$videoplayer.attr('src','');
					$videoscreen.slideUp();
				})

				//点击打赏
				$('#dashang').click(function(){
					if($('.binary-code').is(":hidden")) {
						$('.binary-code').slideDown(500);
					} else {
						$('.binary-code').slideUp(500);
					}
				});

			})
		}
	)
});

