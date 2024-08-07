import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/HomePage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import CategoryPage from '@/components/pages/CategoryPage.vue';
import UserBasket from '@/components/pages/UserBasket.vue';

import NotFound from '@/components/pages/NotFound.vue';

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products/:id', name: 'productPage', component: ProductPage },
  { path: '/category', name: 'categoryPage', component: CategoryPage },
  { path: '/cart', name: 'cart', component: UserBasket },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
