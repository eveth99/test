import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/app'


Vue.use(Router)


export default new Router({
  mode:"history",
  routes: [
    
   
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import('../views/demo3.vue')
    },{
      path: '/',
      name: 'home',
      component: HelloWorld
    }, {
      path: '/app',
      name: 'app',
      component: () => import('../views/app.vue')
    },
  ]
})


