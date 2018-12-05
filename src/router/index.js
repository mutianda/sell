import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
