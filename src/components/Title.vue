<template>
  <div class="title">
    <h1>
      产品筛选列表
    </h1>
    <div class="container" :class="{'change': showMask}" @click="showMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Title",
        data(){
          return{

          }
        },
      methods: {
        showMenu(){
          this.$store.commit('setShowMask',!this.showMask);
          // this.showMask=!this.showMask;
        }
      },
      computed: {
        showMask(){
          return this.$store.state.showMask;
        }
      }
    }
</script>

<style scoped lang="less">
  .title {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #4976ae;
    overflow: hidden;
    h1 {
      margin: 16px;
      font-size: 24px;
      text-align: center;
      color: #ffffff;
    }
    .container {
      position: absolute;
      top: 18px;
      right: 15px;
      display: inline-block;
      cursor: pointer;
      .bar1, .bar2, .bar3 {
        width: 25px;
        height: 2px;
        background-color: #fff;
        margin: 4px 0;
        transition: 0.4s;
      }
      /*&.change{
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
          transform: rotate(-45deg) translate(-9px, 6px) ;
        }
        .bar2 {opacity: 0;}
        .bar3 {
          -webkit-transform: rotate(45deg) translate(-6px, -4px) ;
          transform: rotate(45deg) translate(-6px, -4px) ;
        }
      }*/
    }

  }
</style>
