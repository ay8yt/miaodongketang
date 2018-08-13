<template>
	<div v-html="articleDetail">
	</div>

</template>

<script>
	export default {
		name : "Article",
		data() {
			return {
				articleDetail : ''
			}
		},
		created(){
			let self = this;
			let param = this.$route.params;
			//根据得到的ID，请求相应文章数据
			console.log( this.$route.params )
			this.$axios.get(`/static/jsons/${param.aid}.json`)
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
</script>

<style lang="scss">
	/* Animate Background Image */

	@import "~@/styles/article/_title.scss";

	.page-body {
	    margin-top: 70px;
	    font-size: 18px;
	    .jumbotron {
	        @extend %article-title;
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