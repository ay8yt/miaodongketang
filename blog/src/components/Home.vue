<template>
  <div class="Home">
    <div class="page-body container">
      <ol class="breadcrumb">
        <li class="active">文档专区</li>
      </ol>
      <div class="col-lg-4 col-xs-12 col-sm-6 col-md-6" style="padding: 5px">
        <div class="row">
          <div class="col-lg-12" v-for="item in leftCollection">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" v-bind:src="item.logo" style="height: 100%;"/>
                    </span>
                    {{item.title}}
                  </div>
                </md-card-header>
                <md-card-content>
                  {{item.subhead}}
                </md-card-content>
                <md-card-actions>
                  <md-button>
                      <b class="md-button-color" @click="fullArticel(item.aid)">阅读全文</b>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-xs-12 col-sm-6 col-md-6" style="padding: 5px">
        <div class="row">
          <div class="col-lg-12" v-for="item in centerCollection">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" v-bind:src="item.logo" style="height: 100%;"/>
                    </span>
                    {{item.title}}
                  </div>
                </md-card-header>
                <md-card-content>
                  {{item.subhead}}
                </md-card-content>
                <md-card-actions>
                  <md-button>
                      <b class="md-button-color" @click="fullArticel(item.aid)">阅读全文</b>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 col-sm-6 col-md-6" style="padding: 5px">
        <div class="row">
          <div class="col-lg-12" v-for="item in rightCollection">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" v-bind:src="item.logo" style="height: 100%;"/>
                    </span>
                    {{item.title}}
                  </div>
                </md-card-header>
                <md-card-content>
                  {{item.subhead}}
                </md-card-content>
                <md-card-actions>
                  <md-button>
                      <b class="md-button-color" @click="fullArticel(item.aid)">阅读全文</b>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        leftCollection : [],
        centerCollection : [],
        rightCollection : []
      }
    },
    created(){
      let self = this;
      //process.env.API_HOST 根据环境（开发/生产）选择不同路径
      this.$axios.get(`${process.env.API_HOST}/static/jsons/home/articles.json`)
      .then(function(response) {
      	let collections = response.data
      	console.log(collections);
        self.leftCollection = collections.left;
        self.centerCollection = collections.center;
        self.rightCollection = collections.right;
      })
      .catch(function (error) {
      	console.log(error);
      })
    },
    methods : {
      fullArticel : function(aid){
        this.$router.push({
          path: `/article/${aid}`,
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page-body {
    margin-top: 100px;

    .md-title {
      line-height: 30px;
      color: #666;
      text-shadow: 0 0 1px #000;
      font-size: 20px;

      .title-img {
        display: inline-block;
        height: 65px;
        margin-right: 10px;
      }

      img.article-logo {
        height: 65px;
        border-radius: 3px;
        vertical-align: middle;
      }
    }

    .md-button-color {
      color: #337ab7;
    }
  }
</style>
