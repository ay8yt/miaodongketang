"use strict";require(["../../conf/config"],function(){require(["css!../../styles/index/index.css"]),require(["css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"]),require(["jquery","swiper","waves","datas"],function(t,e,i,n){t(window).ready(function(){i.init();new e(".swiper-container",{autoplay:!0,direction:"horizontal",speed:800,pagination:{el:".swiper-pagination"}});t(".category").click(function(e){var i=this;setTimeout(function(){window.open("views/category/category.html#cno="+t(i).attr("cno"))},300)});var s=t("article .content");s.text(n.feeman),t("#feemanCollect").click(function(e){"yes"==s.attr("display")?(s.slideUp(1e3),s.attr("display","no"),t(this).text("点击展开阅读")):(s.slideDown(1e3),s.attr("display","yes"),t(this).text("点击收起原文"))})})})});