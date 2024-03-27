import { h } from 'vue';
import {
  RouterView,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const demo: RouteRecordRaw[] = [
  {
    path: '/user',
    name: 'user',
    component: {
      render () {
        return h(RouterView);
      }
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/user/list.vue'),
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/user/info.vue'),
      },
    ]
  },
];
export default demo;
