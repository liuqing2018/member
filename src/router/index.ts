import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

import demo from './demo.ts';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: import('../views/demo/demo1（数据类型）.vue'),
  },
  ...demo,
,
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;


