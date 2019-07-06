<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="getData()">请求数据</button>

    <ul>
        <li v-for="item in list" :key="item.aid">
          {{item.title}}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods: {
    getData() {
       var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        this.$http.get(api).then(function (response) {
          console.log(response);
          this.list = response.body.result;
        },function (err) {
          console.log(err);
        })

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
