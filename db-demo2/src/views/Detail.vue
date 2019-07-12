<template>
  <div class="container">
    <div class="loading" v-show="loading">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
    </div>
    <h2>{{movie.title}}({{movie.year}})</h2>
    <div class="box">
      <div class="left">
        <img :src="movie.images.large" alt="">
      </div>
      <div class="main">
        <div>导演：{{getDirectors}}</div>
        <div>主演：{{getCasts}}</div>
        <div>评分：{{movie.rating.average}}</div>
        <div>
          <h3>{{movie.title}}剧情介绍</h3>
          {{movie.summary}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true,
        movie: {
          images: {
            large: ''
          },
          rating: {
            average: 0
          }
        }
      }
    },
    /*mounted(){
      // 获取电影详情
      this.getMovieDetail();
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
      '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/detail/') == 0) {
          this.getMovieDetail();
        }
      }
    },*/
    activated(){
      // 在App.vue中使用了构建组件keep-alive,所以可用钩子函数activated属性来代替watch中的$route监听
      // 获取电影详情
      this.getMovieDetail();
    },
    methods: {
      // 获取电影详情
      getMovieDetail(){
          debugger
        let detailUrl = '/movie/subject/' + this.$route.params.id +'?apikey=0df993c66c0c636e29ecbb5344252a4a';
        this.$http.get(detailUrl).then((res) => {
          console.log(res.data);
          this.movie = res.data;

          this.loading = false;
        })
      },
      // 过滤数据
      getFilterData(obj){
        let arr = [];
        if (!obj || obj.length == 0)return '';

        for (let i = 0; i < obj.length; i++) {
          arr.push(obj[i].name)
        }
        return arr.join('/');
      },
    },
    computed: {
      // 获取导演
      getDirectors(){
        return this.getFilterData(this.movie.directors);
      },
      // 获取主演
      getCasts(){
        return this.getFilterData(this.movie.casts);
      },
    }
  }
</script>

<style>
 .loading {
    position: absolute;
    top: 50%;
    left: 50%;}
  .loading-bar {
    display: inline-block;
    width: 4px;
    height: 18px;
    border-radius: 4px;
    animation: loading 1s ease-in-out infinite;}
  .loading-bar:nth-child(1) {
    background-color: #3498db;
    animation-delay: 0;}
  .loading-bar:nth-child(2) {
    background-color: #c0392b;
    animation-delay: 0.09s;}
  .loading-bar:nth-child(3) {
    background-color: #f1c40f;
    animation-delay: .18s;}
  .loading-bar:nth-child(4) {
    background-color: #27ae60;
    animation-delay: .27s;}

  @keyframes loading {
    0% {
      transform: scale(1); }
    20% {
      transform: scale(1, 2.2);  }
    40% {
      transform: scale(1);}
  }

</style>
