<template>
  <div id="app">
    <v-header></v-header>

    <div id="container">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

  import vHeader from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      vHeader
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
