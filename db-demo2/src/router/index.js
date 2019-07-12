import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Deatail',
      component: Detail
    },
    {
      path: '/search/:searchKey',
      name: 'Search',
      component: Search
    }
  ]
})
