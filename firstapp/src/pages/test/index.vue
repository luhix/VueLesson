<template>
  <div>
    <div class="message">{{msg}}</div>
  <van-button @click="toggleTopPopup" class="demo-margin-right">顶部弹出</van-button>
    <van-popup :show="show1"
     @close="onClose"
     position="top"
    >
      <!-- 必须外层套一个div 改变样式才生效 -->
      <div class="pop-content">
      内容
      </div>
    </van-popup>

    <van-button @click="toggleTopPopup" class="demo-margin-right">底部弹出</van-button>
    <van-popup :show="show"
     @close="onClose"
     position="bottom"
    >
     
      <van-datetime-picker
        type="datetime"
        :value="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onInput"
      />
    </van-popup>

  </div>
</template>

<script>
const DOMAIN_URL = 'http://jsonplaceholder.typicode.com/posts'
export default {
  data () {
    return {
      msg: 'Hello',
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date().getTime(),
      maxDate: new Date(2019, 10, 1).getTime(),
      currentDate: new Date().getTime()
    }
  },
  beforeMount() {
    console.log(this.$fly)

    // 1. get请求
    // this.$fly.get(DOMAIN_URL)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // 2. POST请求
    this.$fly.post(DOMAIN_URL, {
        title: 'Doris',
        body: 24,
        userId:1
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  },
  methods: {
    onClose() {
      this.show = false;
    },
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    },
    toggleTopPopup() {
      this.show = true;
    },
    onInput(event) {
      console.log(event)
      console.log(event.mp.detail)
      console.log(new Date(event.mp.detail))
      this.show = false;
      this.testFun()
    },
 
  }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
.pop-content{
  padding: 25px;
  color: red;
}
.top {
  color: rebeccapurple;
  width: 100%;
  padding: 20px;
  border-radius: 0;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.8)!important;
}
</style>