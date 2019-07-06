<template>
  <div class="hello">
    <h1>我是从页面上直接获取的： {{ this.$store.state.count }}</h1>
    <h1>我是从getter接获取的计算属性值： {{ this.$store.getters.getStateCount }}</h1>
    <h2>Essential Links</h2>

    <p>count的值： {{this.$store.state.count}}</p>
    <button @click="addCount">+</button>
    <button @click="redCount">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addCount() {
      // this.$store.commit("add");
      this.$store.dispatch("addCount");
    },
    redCount() {
      // this.$store.commit('reduction')
      this.$store.dispatch('redCount')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
