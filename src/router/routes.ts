import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comments', component: () => import('pages/CommentPage.vue') }
    ]
  },
  {
    path: '/article',
    component: () => import('layouts/ArticleLayout.vue'),
    children: [{
      path: 'hello_world',
      component: () => import('pages/1/ArticlePage.vue')
    }, {
      path: 'golang_dev_without_network',
      component: () => import('pages/2/ArticlePage.vue')
    }, {
      path: 'use_snipaste_instead_snip_tool',
      component: () => import('pages/3/ArticlePage.vue')
    }, {
      path: 'finally_installed_chrome_at_my_office_computer',
      component: () => import('pages/4/ArticlePage.vue')
    }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
