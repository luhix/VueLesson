<template>
    <div>
        <div v-for="(item, index) in movList" :key="index" :data-id = "item.id" class="title" @tap="toDetail(index)">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>

const MOVIE_URL = "https://jsonplaceholder.typicode.com/users/1/albums"

export default {
    data() {
        return {
            movList: []
        }
    },
    beforeMount() {
         // 1. get请求
        this.$fly.get(MOVIE_URL)
        .then( (response) => {
            console.log(response.data);
            let movieArr = response.data
            this.$store.dispatch('getMovieList', movieArr)
            this.movList = movieArr
        })
        .catch( (error) =>  {
        console.log(error);
        });
    },

    methods: {
        //传参数
        toDetail(index) {

            wx.navigateTo({
                url:　'/pages/movie/movieDetail/main?index=' + index
            })
        }
    },
}
</script>

<style scoped>
    .title{
        padding: 50rpx;
    }
</style>
