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
	children: [
	  {
		 path: 'carier',
		 name: 'carier',
		 component: JobsView 
	  }
	]
 },
  {
  	 path: '/jobs_detail/:id',
  	 name: 'jobs_detail',
  	 component: JobsDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
