<template>
  <div class="BackTop">
    <div class="back-btn" v-show="show" v-on:click="backtop">
      back
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
      $(window).scroll(this._.debounce(function(){
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

<style lang="scss">
  .BackTop {
    .back-btn {
      text-align: center;
      width: 50px; height: 50px;
      line-height: 50px;
      border-radius: 3px;
      box-shadow: 0 0 5px 0 #888;
      position: fixed;
      right: 50px; bottom: 30px;
      &:hover {
        cursor: pointer;
        background: #eee;
      }
    }
  }
</style>
