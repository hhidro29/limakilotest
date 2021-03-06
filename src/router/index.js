import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/layout/homeContent'
import homee from '@/components/layout/homeContent2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      meta: {
        breadcrumb: 'Dashboard'
      }
    },
    {
      path: '/home2',
      component: homee,
      meta: {
        breadcrumb: 'Dashboard2'
      }
    }
  ]
})
