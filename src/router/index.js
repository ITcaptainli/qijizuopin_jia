import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: () => import('@/components/home/Home')
    },
    {
      path: '/past/:id',
      name: 'Past',
      meta: {
        title: '查看往期'
      },
      component: () => import('@/components/past/Past')
    },
    {
      path: '/book/:id',
      name: 'Book',
      meta: {
        title: '图书详情'
      },
      component: () => import('@/components/bookDetails/BookDetail')
    }
  ]
})
