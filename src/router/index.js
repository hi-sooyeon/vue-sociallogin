import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import KakaoLogin from "@/views/KakaoLogin";
import NaverLogin from "@/views/NaverLogin";
import config from "../config.yaml"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  path: '/kakaologin',
  name: 'KakaoLogin',
  component: KakaoLogin
  },
  {
  path: '/naverlogin',
  name: 'NaverLogin',
  component: NaverLogin
  },
  {
  path: '/googlelogin',
  name: 'GoogleLogin',
  component: () => import( /* webpackChunkName: "parent" */ '../views/GoogleLogin')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

var input = document.getElementById("google_meta_key")
input.setAttribute("content", config.googlekey)

export default router
