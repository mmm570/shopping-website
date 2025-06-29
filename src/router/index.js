import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../layout/FullView.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomePage.vue'),
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: '/productItem/:id',
          name: 'productItem',
          component: () => import('../views/ProductItem.vue'),
          props: true,
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: '/shopCart',
          name: 'shopCart',
          component: () => import('../views/ShopCart.vue'),
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login.vue'),
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/Register.vue'),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const isLogin = document.cookie !== ''

  if (!to.meta.requiresAuth) {
    console.log(isLogin, 1)
    next()
  } else if (to.name !== 'login' && !isLogin) {
    console.log(isLogin, 2)
    next({ name: 'login' })
  } else {
    console.log(isLogin, 3)
    next()
  }
})
export default router
