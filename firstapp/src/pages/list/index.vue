<template>
    <div>
        <div v-for="(item, index) in listTmp" :key="index" @tap="toDetail" :data-id="index">
            <van-card
                :num="item.rank"
                :price="item.hot"
                :desc="item.si_proxycompany"
                :title="item.artist_name"
                :thumb="item.pic_huge"
            />
        </div>
        
    </div>
</template>

<script>

const DOMAIN_URL = 'http://jsonplaceholder.typicode.com/posts'
import {mapState} from 'vuex'


export default {
    beforeMount() {
    
        this.$store.dispatch('getList')
    },
    computed: {
        // 映射状态到本组件
        ...mapState(['listTmp'])
    },
    methods: {
        toDetail(e) {
            console.log(e.mp.currentTarget.dataset.id)
            wx.navigateTo({
                url:'/pages/list/listDetail/main?id=' + e.mp.currentTarget.dataset.id
            })
        }
    },
}
</script>

<style>
    .img{
        width: 100rpx;
        height: 100rpx;
    }
</style>
