import AboutTeamVue from '@/views/AboutTeam.vue'
import shareExperienceVue from '@/views/shareExperience.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView'
import SignUp from '../views/SignUp'




const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView ,
  },
  {
    path: '/Experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperienceView.vue')
  },
  {
    path: '/',
    name: 'Signin',
    component:SigninView
   },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:SignUp
  },
  {
    path:'/about',
    name:'AboutTeam',
    component:AboutTeamVue
  },
  {
    path:'/share',
    name: 'Share',
    component:shareExperienceVue
  },
  {
    path: '/Update/:id',
    name: 'Update',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateView.vue')
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
