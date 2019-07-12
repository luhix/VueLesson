<template>
    <div>
        <div>
            <p>{{movieDetail.title}} -- {{movieDetail.userId}}</p>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    data () {
        return {
            movieDetail: {}
        }
    },
    beforeMount() {
        this.index = this.$mp.query.index
        console.log(this.index)
    },

    mounted() {
        this.movieDetail = this.movList[this.index]
    },
    computed: {
        ...mapState(['movList'])
    },


}
</script>
