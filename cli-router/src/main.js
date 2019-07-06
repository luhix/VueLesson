import Vue from 'vue'
import App from './App.vue'
// 引入路由和路由配置
import VueRouter from 'vue-router'
import routerConfig from  './router.config.js'

//引入动画库
import './assets/css/animate.css';

//使用路由
Vue.use(VueRouter);
// 生成路由实例
const router = new VueRouter(routerConfig);



// 挂载
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
