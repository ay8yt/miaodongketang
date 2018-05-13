(function(){
	window.Router = {
		linkto : function(url, cbk) {
			window.onhashchange = cbk;
			window.location.href = url;			
		}
	}
	define(function(){
		return window.Router;
	});
})();
