import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/views/Index'
// import Detail from '@views/Detail'
// import Search from '@views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      
    },
    {
      path: '/hello',         //链接路径
      name: 'HelloWorld',     //路由名称，
      component: HelloWorld   //对应的组件模板
    }
  ]
})
