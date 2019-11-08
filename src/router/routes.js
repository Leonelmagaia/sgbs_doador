
const routes = [ 

  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: '/',  component: () => import('layouts/MyLayout.vue'), props: true, name: "Mylayout"} , 
      { path: 'registro',  component: () => import('pages/registo.vue'), props: true}  

    ]
  },


  {
    path: '/',
    component: () => import('layouts/MyLayout.vue' ),
    children: [
      { path: '', component: () => import('pages/Index.vue'), props: true , name: "PageIndex" },
      { path: 'paginainicial', component: () => import('pages/paginainicial.vue'), props: true  },
      { path: 'agendamentos', component: () => import('pages/agendamentos.vue'), props: true  },
      { path: 'doacao', component: () => import('pages/doacoes.vue'), props: true  }





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
