import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue' 
import JobsDetail from '@/views/JobsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
	  path: '/jobs',
	  name: 'jobs',
	  component: JobsView,
  },
  {
  	 path: '/jobs_detail/:id',
  	 name: 'jobs_detail',
  	 component: JobsDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
