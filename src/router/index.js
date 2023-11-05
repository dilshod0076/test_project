import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateProduct from '@/views/CreateProduct.vue' 
import EditProduct from '@/views/EditProduct.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
	 path: '/create_product',
	 name: 'createProduct',
	 component: CreateProduct
  },
  {
  	 path: '/edit_product/:productId',
  	 name: 'editProduct',
  	 component: EditProduct
  },
  {
  	 path: '/product_view/:productId',
  	 name: 'productView',
  	 component: ProductView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
