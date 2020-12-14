import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthService from '../services/AuthService.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue")
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/createuser',
    name: 'CreateUser',
    component: () => import("../views/Usuario/Create.vue")
  },

  {
    path: '/listuser',
    name: 'ListUser',
    component: () => import("../views/Usuario/List.vue")
  },

  {
    path: '/detailuser',
    name: 'DetailUser',
    component: () => import("../views/Usuario/Detail.vue")
  },

  {
    path: '/createproduct',
    name: 'CreateProduct',
    component: () => import("../views/Produto/Create.vue")
  },

  {
    path: '/listproduct',
    name: 'ListProduct',
    component: () => import("../views/Produto/List.vue")
  },

  {
    path: '/detailproduct',
    name: 'DetailProduct',
    component: () => import("../views/Produto/Detail.vue")
  },

  {
    path: '/createplataform',
    name: 'CreatePlataform',
    component: () => import("../views/Plataforma/Create.vue")
  },

  {
    path: '/listplataform',
    name: 'ListPlataform',
    component: () => import("../views/Plataforma/List.vue")
  },

  {
    path: '/detailplataform',
    name: 'DetailPlataform',
    component: () => import("../views/Plataforma/Detail.vue")
  },

  {
    path: '/createpedido',
    name: 'CreatePedido',
    component: () => import("../views/Pedido/Create.vue")
  },

  {
    path: '/listpedido',
    name: 'ListPedido',
    component: () => import("../views/Pedido/List.vue")
  },

  {
    path: '/detailpedido',
    name: 'DetailPedido',
    component: () => import("../views/Pedido/Detail.vue")
  },

  {
    path: '/createinventario',
    name: 'CreateInventario',
    component: () => import("../views/Inventario/Create.vue")
  },

  {
    path: '/listinventario',
    name: 'ListInventario',
    component: () => import("../views/Inventario/List.vue")
  },

  {
    path: '/detailinventario',
    name: 'DetailInventario',
    component: () => import("../views/Inventario/Detail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && !AuthService.isSignedIn()) {
      next({ name: 'Login' });
  } else {

      if (to.name == "CreateProduct" && !AuthService.isAdmin()) {
          next({ name: 'Home' });
      } else
      if (to.name == "CreatePlataform" && !AuthService.isAdmin()) {
        next({ name: 'Home' });
      } else
      if (to.name == "CreateInventario" && !AuthService.isAdmin()) {
      next({ name: 'Home' });
      } else
      if (to.name == "ListInventario" && !AuthService.isAdmin()) {
        next({ name: 'Home' });
      } else
      if (to.name == "DetailProduct" && !AuthService.isAdmin()) {
        next({ name: 'Home' });
      } else
      if (to.name == "DetailPlataform" && !AuthService.isAdmin()) {
        next({ name: 'Home' });
      } else
      if (to.name == "DetailInventario" && !AuthService.isAdmin()) {
        next({ name: 'Home' });
      } else
          next();
  }
})

export default router
