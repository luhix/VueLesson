<template>
  <div class="container">
    <div class="loading" v-show="loading">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
    </div>


    <h2>{{title}}</h2>
    <div class="row">
      <div class="col-md-2 text-center" v-for="item in list" :key="item.id">
        <router-link :to="{path:'/detail/'+item.id}">
          <img :src="item.images.large" alt="">
          <div class="title">{{item.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true,
        title: '',
        list: []
      }
    },
    props: ['movieType'],// 接收父组件传过来的值 --in_theaters=正在上映的电影  --search==搜索电影
    mounted(){
      this.loadMovieList();
    },
    methods: {
      loadMovieList(){
        this.loading = true;
        // 请求参数
        let params = {
            count: 18
          },
          // 请求路径
          movieUrl = '/movie/' + this.movieType;
          debugger
          // movieUrl = '/photos';
        // 如果是搜索进入，新增搜索关键字参数
        if (this.movieType == 'search') {
          params['q'] = this.$route.params.searchKey;
        }
        this.$http.get(movieUrl + '?apikey=0df993c66c0c636e29ecbb5344252a4a', params).then((res) => {
          console.log(res.data)
          // 这里不做多校验，可自己加，直接上数据
          this.list = res.data.subjects;
          this.title = res.data.title;
          this.loading = false;
        })
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 230px;
    vertical-align: middle;
  }
  .row > div {
    margin-bottom: 20px;
  }
  .title {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

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
