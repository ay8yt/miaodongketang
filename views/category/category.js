"use strict";require(["../../conf/config"],function(){require(["css!../../styles/category/category.css"]),require(["css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"]),require(["jquery","waves","iscroll","template","utils","loadVideolist"],function(t,s,e,o,i,a){t(function(){console.log("dom ready");var e=i.getURLParameter("cno");s.init(),t(".navlist a.btn").eq(parseInt(e)-1).addClass("active"),t(".navlist a.btn").click(function(s){var e=this;t(this).addClass("active").siblings().removeClass("active"),setTimeout(function(){window.open("http://www.miaodongketang.cn/views/category/category.html?cno="+t(e).attr("cno"))},300)}),a(e,"#videosdata")})})});