"use strict";define(["jquery","iscroll","template","datas"],function(t,l,r,e){return function(s,i){var a=e[s];console.log(a,s);var o=t(i+"-temp").html(),c=r(o,{list:a});t(i).html(c),console.log(200*t("#wrapper ul li").length+"px"),t("#wrapper>ul").css("width",220*t("#wrapper ul li").length+"px");new l("#wrapper",{scrollX:!0,scrollY:!1});t(i).on("click","li",function(){t(this).addClass("active").siblings().removeClass("active"),t("#gotoUKu").show().attr("href",t(this).attr("pageurl")),t("iframe").attr("src",t(this).attr("videourl"))})}});