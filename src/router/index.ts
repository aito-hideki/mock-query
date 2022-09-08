import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

generatedRoutes.push({
  path: '/:pathMatch(.*)*',
  redirect: { name: 'Home' }
})

const routes = setupLayouts(generatedRoutes)
export default createRouter({
  routes,
  history: createWebHistory()
})
