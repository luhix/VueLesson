<template>
  <div @click="clickHandle">

    <!-- 使用 click-counter 组件 -->
      <click-counter :init-num="10" @clickNum="handleClickNum" />
      <click-counter :init-num="10" @clickNum="handleClickNum" />
      <click-counter :init-num="10" @clickNum="handleClickNum" />

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>


    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>

    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
import card from '@/components/card'
import ClickCounter from '@/components/click-counter'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ]
    }
  },

  components: {
    card,
    ClickCounter
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },

    handleClickNum(data) {
      console.log(">>>>>>", data.num);
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
