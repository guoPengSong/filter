<template>
  <div class="list-wrap">
    <div class="list-item" v-for="item in 10">
      <div>被贴物大类：<span>塑料</span></div>
      <div>被贴物小类：<span>PP光面</span></div>
      <div>最低贴标温度：<span>-5</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .list-wrap{
    padding: 20px 15px 30px;
    margin-top: 59px;
    .list-item{
      padding: 8px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #81366b;
      background: #ffffff;
    }
  }
</style>
