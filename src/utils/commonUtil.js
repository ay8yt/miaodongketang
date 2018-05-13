define([],function(){
	return {
		render : temp => {
			document.body.innerHTML += temp;
		},
		getURLParameter : paramName => {
		   	//构造一个含有目标参数的正则表达式的对象
 			var reg = new RegExp("(#|&)" + paramName + "=([^&]*)(&|$)");
 			//匹配目标参数
 			var url = window.location.href.match(reg);
 			//返回参数值
 			if(url != null)
 				return unescape(url[2]);
 			return null;
		}
	};
}) 
