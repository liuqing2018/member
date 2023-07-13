import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import demo from './demo.ts';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/main/index.vue'),
  },
  ...demo,
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
