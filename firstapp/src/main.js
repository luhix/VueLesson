import Vue from 'vue'
import App from './App'
import store from './store/store'

var Fly=require("flyio/dist/npm/wx")
var fly=new Fly

// 添加拦截器
// fly.interceptors.request.use((request)=>{
//     //给所有请求添加自定义header
//     request.headers["X-Tag"]="luhx";
//       //打印出请求体
//       console.log(request.body)
//       //终止请求
//       //var err=new Error("xxx")
//       //err.request=request
//       //return Promise.reject(new Error(""))

//     //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
//     return request;
// })

Vue.prototype.$fly = fly
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()
