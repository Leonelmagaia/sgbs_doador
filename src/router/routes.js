
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'porquedoar', component: () => import('pages/porquedoar.vue') },
      { path: 'processo', component: () => import('pages/processo.vue') },
      { path: 'registo', component: () => import('pages/registo.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'dashdoador', component: () => import('pages/dashdoador.vue') }

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
