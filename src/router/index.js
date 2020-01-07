import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../components/projects/Projects.vue';
import Project from '../components/projects/Project.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/:slug',
    name: 'project',
    component: Project
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    redirect: '/projects'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
