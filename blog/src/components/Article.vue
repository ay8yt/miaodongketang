<template>
	<div class="Home">
		<div class="page-body container">
			<ol class="breadcrumb">
			  	<li class="active"><router-link to="/">文档专区</router-link></li>
			  	<li class="active">{{articlename}}</li>
			</ol>
			<div class="inject" v-html="articleDetail"></div>
		</div>
	</div>
	
</template>

<script>
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
		},
		methods: {
			getData(articleId){
				let self = this;
				this.articlename = articleId;
				this.$axios.get(`/static/jsons/${articleId}.json`)
				.then(function (response) {
					// handle success
					let article = eval('('+response.data+')');
					self.articleDetail = article.detail;
				})
				.catch(function (error) {
					console.log(error);
				})
			}
		}
	}
</script>

<style lang="scss">
	/* Animate Background Image */

	@import "~@/styles/article/_title.scss";

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
			margin: 5px 0 !important; 
		}
		p.title {
			margin: 50px 0 !important;
		}
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

	

	.itlc {
	    font-style: italic;
	}

</style>