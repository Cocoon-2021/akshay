import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import work from '../components/work.vue'
import volunteer from '../components/volunteer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/work',
    name:'work',
    component:work
  },
  {
    path:'/volunteer',
    name:'volunteer',
    component:volunteer
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
