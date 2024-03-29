import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isAuth : true   
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      isAuth : true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      isAuth : false
    }
  },
  {
    path: '/register',
    name: 'register',
    component:  () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue'),
    meta: {
      isAuth : false
    }
  },
  {
    path: '/message',
    name: 'message',
    component:  () => import(/* webpackChunkName: "about" */ '../views/message/MessageView.vue'),
    meta: {
      isAuth : true
    }
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component:  () => import(/* webpackChunkName: "about" */ '../views/profile/ProfileView.vue'),
    meta: {
      isAuth : true
    }
  },
  {
    path: '/liste-user',
    name: 'liste-user',
    component:  () => import(/* webpackChunkName: "about" */ '../views/listeUser/ListeUserView.vue'),
    meta: {
      isAuth : true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  let token = localStorage.getItem('token');
  if (to.meta.isAuth) {
    console.log("rerer");
    if(!token){
      next('/login')
    }
  }
  if((to.path == '/login' || to.path == '/register') && token) {
    next('/')
  }
  next()
})

export default router
