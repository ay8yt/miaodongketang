<template>
  <div class="Home">
    <div class="page-body container">
      <ol class="breadcrumb">
        <li class="active">文档专区</li>
      </ol>
      <div class="col-lg-4 col-xs-12 col-sm-6 col-md-6" style="padding: 5px">
        <div class="row">
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/Promise.png" />
                    </span>
                    Promise异步编程
                  </div>
                </md-card-header>
                <md-card-content>
                  快速理解Promise的编程模型及用法
                </md-card-content>

                <md-card-actions>
                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'promise'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <img class="article-logo" src="../assets/images/vue.png" />
                    Vue2.x浅入浅出
                  </div>
                </md-card-header>

                <md-card-content>
                  在最短的时间理解Vue是一个什么框架，以及大致的使用方式
                </md-card-content>

                <md-card-actions>
                  <md-button><b class="md-button-color">阅读全文</b></md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/react.png" />
                    </span>
                    React浅入浅出
                  </div>
                </md-card-header>

                <md-card-content>
                  在最短的时间理解React是一个什么框架，以及大致的使用方式
                </md-card-content>

                <md-card-actions>
                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'react'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
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
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img" style="width: 110px; padding: 6px; background: #cf4647;">
                      <img class="article-logo" src="../assets/images/gulp.svg" style="height: 100%;" />
                    </span>
                    Gulp v3.9.1的使用
                  </div>
                </md-card-header>

                <md-card-content>
                  不就是读取、处理、写入么...
                </md-card-content>

                <md-card-actions>

                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'gulp'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/git.png" />
                    </span>
                    如何使用git开发项目
                  </div>
                </md-card-header>

                <md-card-content>
                  一个版本管理工具为什么学习成本会这么高？
                </md-card-content>

                <md-card-actions>
                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'git'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/prototype.png" />
                    </span>
                    彻底搞定原型链
                  </div>
                </md-card-header>

                <md-card-content>
                  有什么问题不懂的时候贼难，弄懂了之后会发出 <b>"我cao"</b> 的声音！
                </md-card-content>

                <md-card-actions>
                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'prototype'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img" style="width: 65px;">
                      <img class="article-logo" src="../assets/images/webpack.svg" style="height: 100%;" />
                    </span>
                    Webpack v4.x的使用
                  </div>
                </md-card-header>

                <md-card-content>
                  有着如此变态的配置文件，为何还这么受开发者青睐
                </md-card-content>

                <md-card-actions>
                  <md-button><b class="md-button-color">阅读全文</b></md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 col-sm-6 col-md-6" style="padding: 5px">
        <div class="row">
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/huibao.png" />
                    </span>
                    程序猿如何做工作汇报？
                  </div>
                </md-card-header>

                <md-card-content>
                  除了给别人展示看不懂的代码，我们还能做些什么？
                </md-card-content>

                <md-card-actions>
                  <md-button>
                    <b class="md-button-color">阅读全文</b>
                  </md-button>
                  <md-button><b class="md-button-color">分享</b></md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
          <div class="col-lg-12">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    <span class="title-img">
                      <img class="article-logo" src="../assets/images/this.png" />
                    </span>
                    用中国话学this指向
                  </div>
                </md-card-header>
                <md-card-content>
                  再也不会被this指的晕头转向了~~
                </md-card-content>
                <md-card-actions>
                  <md-button>
                    <router-link :to="{ name:'article', params: {aid: 'this'} }">
                      <b class="md-button-color">阅读全文</b>
                    </router-link>
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
        msg: 'Welcome to Your Vue.js App'
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
        border-radius: 2px;
      }

      img.article-logo {
        height: 65px;
        vertical-align: middle;
      }
    }

    .md-button-color {
      color: #337ab7;
    }
  }
</style>
