import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CountryPage from '@/pages/CountryPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomePage,
    },
    {
      path: '/country/:id',
      component: CountryPage,
      props: true,
    },
  ],
});

export default router;
