import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/layout/header'
import dashboard from '@/components/layout/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
