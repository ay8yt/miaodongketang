<template>
  <div id="app">
	<div class="navbar navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
			  <span class="logo"></span>
			</div>
			<div class="navbar-collapse collapse">
			  <ul class="nav navbar-nav">
				<li><a href="https://www.miaodongketang.cn">秒懂课堂</a></li>
				  <li><a href="https://www.miaodongketang.cn/views/category/category.html#cno=001" target="_blank" >视频专区</a></li>
				  <li><a href="/blog/dist/" style="color:red"><b>文档专区</b></a></li>
			  </ul>
			</div>
		</div>
	</div>
	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  	// @import url('https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
		
  	@import "~@/styles/common/_common.scss";  /*~@ 表示相对src目录*/
  	@import "~@/styles/common/_mixins.scss";

  	html,body {
	    width: 100%;
	}

	.navbar {
	    background: rgb(230,230,230);
	    box-shadow: 0 0 4px 1px rgba(0,0,0,0.3);
	    .logo {
	        display: block;
	        width: 150px;
	        height: 60px;
	        background: url("./assets/images/logo2.png") 0px 0px no-repeat;
	        background-size: 100%;
	    }   
	    .nav {
	        margin-left: 40px;
	        a {
	            line-height: 30px;
	            font-size: 15px;
	        }
	    }
	}

</style>
