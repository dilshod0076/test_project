import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '../src/main.css'

const DirectionsCard = defineAsyncComponent(() => import('@/components/Card/card.vue'))
const JobsCard = defineAsyncComponent(() => import('@/components/Card/jobsCard.vue'))
createApp(App)
.use(store)
.use(router)
.component('directions-card', DirectionsCard)
.component('jobs-card', JobsCard)
.mount('#app')
