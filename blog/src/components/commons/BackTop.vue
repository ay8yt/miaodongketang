<template>
  <div class="BackTop">
    <div class="back-btn" v-show="show" v-on:click="backtop">
    </div>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {
        show: false
      }
    },
    beforeCreate() {
      let that = this;
      $(window).scroll(_.debounce(function(){
        console.log("change!");
        if($(window).scrollTop() > 800) {
          that.show = true;
        } else {
          that.show = false;
        }
      },300))
    },
    methods: {
      backtop(){
        $(window).scrollTop(0);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .BackTop {
    .back-btn {
      background: url("/static/images/commons/back2top_default.png") 0 0;
      background-size: cover;
      width: 45px; height: 45px;
      border-radius: 50%;
      box-shadow: 0 0 5px 0 #888;
      position: fixed;
      right: 50px; bottom: 30px;
      &:hover {
        cursor: pointer;
        background: url("/static/images/commons/back2top.png") 0 0;
        background-size: cover;
      }
    }
  }
</style>
