/*视频列表*/
define(['jquery', "template", 'datas'], function($, template, datas){
	return function(cno, videolistid){
		//加载数据
		var list = datas[cno];
		
		//模板填充数据，重新生成视频列表
		var videosdata = $("#"+videolistid+'-temp').html();
		var strhtml = template(videosdata, { list });
		// console.log($("#"+videolistid))
		$("#"+videolistid).html(strhtml);
		
	}
})
