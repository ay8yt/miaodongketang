"use strict";require(["../../conf/config"],function(){require(["css!../../styles/category/category.css"]),require(["css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"]),require(["jquery","waves","utils","loadVideolist","router","iscroll"],function(e,t,a,s,i,o){e(window).ready(function(){console.log("dom ready");var c=a.getURLParameter("cno");t.init(),e(".navlist a.btn").eq(parseInt(c)-1).addClass("active"),e(".navlist a.btn").click(function(t){e(this).addClass("active").siblings().removeClass("active"),i.linkto("#cno="+e(this).attr("cno"),function(){var e=a.getURLParameter("cno");console.log("onhashchange---\x3e cno:",e),s(e,"#videosdata")})}),s(c,"#videosdata");new o("#wrapper",{scrollX:!0,scrollY:!1});e("#videosdata").on("click","li",function(){var t=e(this).attr("videourl");if(""==t)alert("该视频正在制作当中，请晚些时候再查看");else{e(this).addClass("active").siblings().removeClass("active");var a=document.createElement("iframe");a.width=1120,a.height=630,a.class="center-block",a.src=t,a.frameborder=0,e(".category-detail").empty().append(a),e("#gotoUKu").show().attr("href",e(this).attr("pageurl")),e("#dashang").show()}}),e("#dashang").click(function(){e(".page-leftside").show().animate({left:0},500,"linear")}),e(".page-leftside .erweima .fold").click(function(){e(".page-leftside").animate({left:-300},500,"linear",function(){e(this).hide()})})})})});