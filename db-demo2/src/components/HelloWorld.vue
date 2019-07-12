<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="container">
      <div id="indicators" class="carousel slide w-100" data-ride="carousel" data-keyboard="false" data-pause="hover" data-interval="5000">
        <ol class="carousel-indicators">
          <li data-target="#indicators" data-slide-to="0" class="active"></li>
          <li data-target="#indicators" data-slide-to="1"></li>
          <li data-target="#indicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="http://img2.imgtn.bdimg.com/it/u=1680238894,752784316&fm=26&gp=0.jpg">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="http://img3.imgtn.bdimg.com/it/u=2171811363,813468510&fm=26&gp=0.jpg">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="">
          </div>
        </div>
        <a class="carousel-control-prev" href="#indicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#indicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
