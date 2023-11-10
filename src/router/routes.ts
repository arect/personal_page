import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comments', component: () => import('pages/CommentPage.vue') }
    ]
  },
  {
    path: '/article',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: 'hello_world',
      component: () => import('pages/1/ArticlePage.vue')
    }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
