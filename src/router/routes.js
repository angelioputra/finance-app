
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          showBurgerMenu: true,
          showNotification: true
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'my-saving',
        name: 'my-saving',
        meta: {
          title: 'My Saving',
          showButtonBack: true,
          backTo: 'home'
        },
        component: () => import('pages/MySaving.vue')
      },
      {
        path: 'saving-account',
        name: 'saving-account',
        meta: {
          title: 'Saving Account',
          showBurgerMenu: true,
          showNotification: true
        },
        component: () => import('pages/MySaving.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
