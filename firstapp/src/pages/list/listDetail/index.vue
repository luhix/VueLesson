<template>
    <div>
        <div>
            <p>{{dataObj.title}}</p>
            <img :src="dataObj.album_1000_1000" alt="">
        </div>
    </div>
</template>
<script>

import {mapState} from 'vuex'

export default {
    // 接收参： 方法一 原生
    // onLoad(options) {
    //     console.log(options)
    // }
    data() {
        return {
            dataObj: []
        }
    },
    beforeMount() {
        console.log(this)

        //使用  this.$mp.query.id 取代 onLoad 中的options

        this.id = this.$mp.query.id
    },

    mounted() {
        console.log(this)

        this.dataObj = this.listTmp[this.id]
    },

    computed: {
        ...mapState(['listTmp'])
    },
}
</script>