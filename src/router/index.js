import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';

import Page from '@/views/Page.vue';
import Subpage from '@/views/Subpage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },


  {
    path: '/:slug',
    name: 'page',
    component: Page
  },
  {
    path: '/:slug/:subslug',
    name: 'subpage',
    component: Subpage
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
