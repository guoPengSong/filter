<template>
    <div class="menu-wrap" :class="{'show':showMask}">
      <div class="menu">
        <div class="item">
          <div class="title">
            <div>
              被贴物大类
            </div>
          </div>
          <div class="clearfix content">
            <div class="pull-left"><span>塑料</span></div>
            <div class="pull-left"><span>金属</span></div>
            <div class="pull-left"><span>其他</span></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        computed: {
          showMask(){
            return this.$store.state.showMask;
          }
        }
    }
</script>

<style scoped lang="less">
  .menu-wrap{
    transition: transform .25s ease;
    transform: translate3d(100%,0,0);
    position: fixed;
    width: 85%;
    top: 0;
    bottom: 0;
    left: 100%;
    height: 100%;
    color: #333;
    background-color: #f7f7f7;
    &.show{
      transform: translate3d(-100%,0,0);
    }
    .menu{
      -webkit-overflow-scrolling: touch;
      overflow: hidden;
      overflow-y: auto;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      padding-bottom: 50px;
      .item{
        margin-bottom: 15px;
        background: #fff;
        .title{
          line-height: 25px;
          padding: 10px;
          div{
            height: 25px;
            max-width: 250px;
            overflow: hidden;
            font-size: 16px;
            color: #333;
            text-overflow: ellipsis;
          }
        }
        .content{
          position: relative;
          padding: 10px 0 0 10px;
          &:before{
            content: "";
            position: absolute;
            z-index: 1;
            pointer-events: none;
            background-color: #e5e5e5;
            height: 1px;
            right: 0;
            top: 0;
            left: 10px;
          }
          div{
            box-sizing: border-box;
            float: left;
            width: 33.33%;
            padding-right: 10px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
            overflow: hidden;
            &.active{
              a{
                color: #4976ae;
                background-color: #fdf0f0;
                height: 30px;
                line-height: 30px;
              }
            }
            span{
              position: relative;
              display: block;
              padding: 0 5px;
              color: #666;
              background-color: #f7f7f7;
              border-radius: 4px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
