<template>
  <div id="app">
    <Title></Title>
    <Mask-container></Mask-container>
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
  import Title from './components/Title';
  import MaskContainer from './components/MaskContainer';
  import Menu from './components/Menu';
  export default {
    name: 'App',
    components:{
      Title,
      MaskContainer,
      Menu
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
