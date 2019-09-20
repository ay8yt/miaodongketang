<template>
	<div class="Home">
		<div class="page-body container">
			<ol class="breadcrumb">
			  	<li class="active"><router-link to="/">文档专区</router-link></li>
			  	<li class="active">{{articlename}}</li>
			</ol>
			<div class="inject" v-html="articleDetail"></div>
		</div>
    <back-top></back-top>
	</div>

</template>

<script>
  import "../libs/bootstrap-treeview.min";

  const BackTop = () => import(/* webpackChunkName: "back-top" */ './commons/BackTop.vue');

	export default {
		name : "Article",
		data() {
			return {
				articlename: "",
				articleDetail : ''
			}
		},
		created(){
			this.getData(this.$route.params.aid);
			//加载每篇文章对应的业务JS文件
			$(`<script src="${process.env.API_HOST}/static/scripts/${this.$route.params.aid}/index.js">`)
      .appendTo($("body"));
      // import(`/static/scripts/${this.$route.params.aid}/index.js`)
		},
    beforeUpdate() {
      //重新渲染这个组件时，表示要切换文章，将scrollTop回0
      $(window).scrollTop(0);
    },
		methods: {
			getData(articleId){
				let self = this;
				this.articlename = articleId;
        //process.env.API_HOST 根据环境（开发/生产）选择不同路径
				this.$axios.get(`${process.env.API_HOST}/static/jsons/${articleId}.json`)
				.then(function(response) {
					// handle success
					let article = eval('('+response.data+')');
					self.articleDetail = article.detail;
				})
				.catch(function (error) {
					console.log(error);
				})
			}
		},
    components: {
      BackTop
    }
	}
</script>

<style lang="scss">

	@import url("../assets/bootstrap-treeview.min.css");
	@import "~@/styles/article/_title.scss"; /*~@ 表示相对src目录*/

	.page-body {
	    margin-top: 100px;
	    font-size: 18px;
	    .breadcrumb {
	    	font-size: 14px;
	    }
	    .jumbotron {
	        @extend %article-title;
	    }
		.illustration {
			border-radius: 4px;
		}
		p {
			margin: 20px 0 !important;
		}
		p.answers {
			margin: 10px 0 !important;
		}
		p.title {
			margin: 50px 0 !important;
		}
    p.bold {
      font-weight: bold;
    }
		img {
			border-radius: 3px;
		}
	}
	.commond-line {
		background: #333;
		color: white;
		border-radius: 4px;
		font-weight: lighter;
		padding: 1px 8px; margin: 0 3px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 18px;
		line-height: 18px;
	}

	.code-board {
	    border-radius: 5px;
	    overflow: hidden;
	    display: inline-block;
	    table {
	        tr {
	            td {
	                background-color: rgb(63, 63, 63);
	                border: 1px solid rgb(50, 50, 50);
	                padding: 8px 16px;
	                font-size: 17px;
	                font-family: Consolas;
	            }
	        }
	    }
	}

  span.bg-img {
    border-radius: 5px;
    padding: 5px;
    display: table-cell;
    background: black;
  }

	.itlc {
	    font-style: italic;
	}

</style>
