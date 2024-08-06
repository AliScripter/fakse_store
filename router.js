import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/HomePage.vue';
import NotFound from '@/components/pages/NotFound.vue';

export const routes = [
    { path: `/`, name: `home`, component: Home },
    { path: `/:pathMatch(.*)*`, name: `NotFound`, component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
