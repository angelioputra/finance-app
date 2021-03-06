
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
        component: () => import('pages/SavingAccount.vue')
      }
    ]
  },
  {
    path: '/registration',
    component: () => import('layouts/LayoutBlank.vue'),
    children: [
      {
        path: '',
        name: 'registration.onboard',
        meta: {

        },
        component: () => import('pages/RegistrationOnboard.vue')
      },
      {
        path: 'step-1',
        name: 'registration.step-1',
        meta: {
          title: 'Step 1/4',
          showToolbar: true,
          backTo: 'registration.onboard'
        },
        component: () => import('pages/RegistrationStep1.vue')
      },
      {
        path: 'step-2',
        name: 'registration.step-2',
        meta: {
          title: 'Step 2/4',
          showToolbar: true,
          backTo: 'registration.step-1'
        },
        component: () => import('pages/RegistrationStep2.vue')
      },
      {
        path: 'step-3',
        name: 'registration.step-3',
        meta: {
          title: 'Step 3/4',
          showToolbar: true,
          backTo: 'registration.step-2'
        },
        component: () => import('pages/RegistrationStep3.vue')
      },
      {
        path: 'step-4',
        name: 'registration.step-4',
        meta: {
          title: 'Step 4/4',
          showToolbar: true,
          backTo: 'registration.step-3'
        },
        component: () => import('pages/RegistrationStep4.vue')
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
